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
 * Shows both languages clearly separated with comments.
 */
export class CodePreviewGenerator {
    constructor(htmlGenerator: HtmlGenerator, cssGenerator: CssGenerator) {
        this.htmlGenerator = htmlGenerator;
        this.cssGenerator = cssGenerator;
    }

    private htmlGenerator: HtmlGenerator;
    private cssGenerator: CssGenerator;

    // Generate combined code display showing HTML and CSS separately.
    generate(workspaces: WorkspaceMap): string {
        const htmlCode = workspaces.html
            ? this.htmlGenerator.workspaceToCode(workspaces.html)
            : '<!-- No HTML blocks -->';
        const cssCode = workspaces.css
            ? this.cssGenerator.workspaceToCode(workspaces.css)
            : '/* No CSS blocks */';

        return `<!-- HTML Code -->\n${htmlCode}\n\n/* CSS Code */\n${cssCode}`;
    }
}
