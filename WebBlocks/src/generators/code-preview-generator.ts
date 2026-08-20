/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { HtmlGenerator } from './html-generator';
import { CssGenerator } from './css-generator';
import type { WorkspaceMap } from '../workspaces';

/**
 * Combines HTML and CSS code for display in the code preview.
 * Shows both languages as line-numbered tables.
 */
export class CodePreviewGenerator {
    constructor(htmlGenerator: HtmlGenerator, cssGenerator: CssGenerator) {
        this.htmlGenerator = htmlGenerator;
        this.cssGenerator = cssGenerator;
    }

    private htmlGenerator: HtmlGenerator;
    private cssGenerator: CssGenerator;

    private escapeHtml(code: string): string {
        return code
            .replaceAll('&', '&amp;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;')
            .replaceAll('"', '&quot;')
            .replaceAll("'", '&#39;');
    }

    private splitLines(code: string): string[] {
        return code.split(/\r?\n/);
    }

    private createTable(label: string, code: string): string {
        const lines = this.splitLines(code);

        return `
          <div class="output-banner code-banner">
            <div class="traffic-lights">
              <div class="traffic-light red"></div>
              <div class="traffic-light yellow"></div>
              <div class="traffic-light green"></div>
            </div>
            <div class="search-bar">
              <ion-icon name="document" class="icon"></ion-icon>
              ${label}
            </div>
          </div>
          <table class="code-table-grid">
            <tbody>
              ${lines
                  .map(
                      (line, index) => `
              <tr>
                <td class="code-line-number">${index + 1}</td>
                <td class="code-line-content"><pre class="code-line-pre">${this.escapeHtml(line || ' ')}</pre></td>
              </tr>`
                  )
                  .join('')}
            </tbody>
          </table>`;
    }

    // Generate combined code display showing HTML and CSS separately.
    generate(workspaces: WorkspaceMap): string {
        const htmlCode = workspaces.html
            ? this.htmlGenerator.workspaceToCode(workspaces.html)
            : '';
        const cssCode = workspaces.css
            ? this.cssGenerator.workspaceToCode(workspaces.css)
            : '';

        const htmlDisplay = htmlCode.trim() ? htmlCode : '';
        const cssDisplay = cssCode.trim() ? cssCode : '';
        const hasHtmlCode = htmlCode.trim().length > 0;
        const hasCssCode = cssCode.trim().length > 0;

        const htmlSection =
            !hasCssCode || hasHtmlCode
                ? this.createTable('index.html', htmlDisplay)
                : '';
        const cssSection = hasCssCode
            ? this.createTable('style.css', cssDisplay)
            : '';

        return `${htmlSection}${cssSection}`;
    }
}
