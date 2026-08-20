import * as Blockly from 'blockly/core';
import { describe, expect, it } from 'vitest';

import { htmlForBlock } from './generators/html-block-generators';
import { HtmlGenerator } from './generators/html-generator';

describe('html block generators', () => {
    it('keeps the stylesheet chain so later blocks still generate', () => {
        const nextBlock = {} as Blockly.Block;
        const block = {
            getFieldValue: (fieldName: string) =>
                fieldName === 'STYLESHEET_URL' ? 'style.css' : null,
            getNextBlock: () => nextBlock,
        } as unknown as Blockly.Block;
        const generator = {
            blockToCode: (candidate: Blockly.Block | null) =>
                candidate === nextBlock ? '<title>Page title</title>\n' : '',
        } as unknown as HtmlGenerator;

        expect(htmlForBlock['stylesheetPlainLanguage'](block, generator)).toBe(
            '<link rel="stylesheet" href="style.css">\n<title>Page title</title>\n'
        );
    });

    it('generates a title element from the title block', () => {
        const block = {
            getFieldValue: (fieldName: string) =>
                fieldName === 'TITLE_TEXT' ? 'Page title' : null,
            getNextBlock: () => null,
        } as unknown as Blockly.Block;
        const generator = {
            blockToCode: () => '',
        } as unknown as HtmlGenerator;

        expect(htmlForBlock['titlePlainLanguage'](block, generator)).toBe(
            '<title>Page title</title>\n'
        );
    });
});
