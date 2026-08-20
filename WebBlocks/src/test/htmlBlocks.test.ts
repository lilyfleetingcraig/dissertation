import * as Blockly from 'blockly/core';

import { beforeEach, afterEach, describe, it, expect } from 'vitest';
import { htmlBlocks } from '../blocks/blocks';

describe('page block definitions', () => {
    let htmlWorkspace: Blockly.Workspace;
    Blockly.common.defineBlocks(htmlBlocks);

    beforeEach(() => {
        htmlWorkspace = new Blockly.Workspace();
    });

    afterEach(() => {
        htmlWorkspace.dispose();
    });

    it('defines a html block', () => {
        expect(htmlWorkspace.newBlock('htmlPlainLanguage')).toBeDefined();
    });

    it('defines a head block', () => {
        expect(htmlWorkspace.newBlock('headPlainLanguage')).toBeDefined();
    });

    it('defines a body block', () => {
        expect(htmlWorkspace.newBlock('bodyPlainLanguage')).toBeDefined();
    });

    it('defines a stylesheet block', () => {
        expect(htmlWorkspace.newBlock('stylesheetPlainLanguage')).toBeDefined();
    });

    it('defines a title block', () => {
        expect(htmlWorkspace.newBlock('titlePlainLanguage')).toBeDefined();
    });
});
