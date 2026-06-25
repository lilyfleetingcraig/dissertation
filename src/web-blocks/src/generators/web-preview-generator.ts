/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { HtmlGenerator } from './html-generator';
import { CssGenerator } from './css-generator';
import type { WorkspaceMap } from '../workspaces';

export class WebPreviewGenerator {
    constructor(htmlGenerator: HtmlGenerator, cssGenerator: CssGenerator) {
        this.htmlGenerator = htmlGenerator;
        this.cssGenerator = cssGenerator;
    }

    private htmlGenerator: HtmlGenerator;
    private cssGenerator: CssGenerator;

    // Scope CSS selectors to the preview content container.
    private scopeCSS(css: string): string {
        return css
            .split('}')
            .filter((rule) => rule.trim())
            .map((rule) => this.scopeRule(rule))
            .join('\n');
    }

    private scopeRule(rule: string): string {
        const [selector, declarations] = rule.split('{');

        if (!selector || !declarations) {
            return rule;
        }

        const trimmedSelector = selector.trim();
        const trimmedDeclarations = declarations.trim();
        const scopedSelector = this.scopeSelector(trimmedSelector);

        return `${scopedSelector} { ${trimmedDeclarations} }`;
    }

    private scopeSelector(selector: string): string {
        // Map 'html' selector to the preview content container for rendering.
        if (selector === 'html') {
            return '#preview-content';
        }
        // Prepend the preview content container so chrome outside it is untouched.
        return `#preview-content ${selector}`;
    }

    // Generate combined HTML and CSS for preview, with CSS scoped to container.
    generate(workspaces: WorkspaceMap): string {
        const htmlCode = workspaces.html
            ? this.htmlGenerator.workspaceToCode(workspaces.html)
            : '';
        const cssCode = workspaces.css
            ? this.cssGenerator.workspaceToCode(workspaces.css)
            : '';

        // Scope CSS to preview container
        const scopedCSS = cssCode ? this.scopeCSS(cssCode) : '';

        // Wrap in a container to scope CSS
        return `
        ${scopedCSS ? `<style>${scopedCSS}</style>` : ''}
        ${htmlCode}
    `;
    }
}
