import * as Blockly from 'blockly/core';

import { beforeEach, afterEach, describe, it, expect } from 'vitest';
import { cssBlocks } from '../blocks/blocks';

describe('page selector definitions', () => {
    let cssWorkspace: Blockly.Workspace;

    beforeEach(() => {
        Blockly.common.defineBlocks(cssBlocks);
        cssWorkspace = new Blockly.Workspace();
    });

    afterEach(() => {
        cssWorkspace.dispose();
    });

    it('defines a html selector', () => {
        expect(
            cssWorkspace.newBlock('htmlSelectorPlainLanguage')
        ).toBeDefined();
    });

    it('defines a head selector', () => {
        expect(
            cssWorkspace.newBlock('headSelectorPlainLanguage')
        ).toBeDefined();
    });

    it('defines a body selector', () => {
        expect(
            cssWorkspace.newBlock('bodySelectorPlainLanguage')
        ).toBeDefined();
    });

    it('defines a title selector', () => {
        expect(
            cssWorkspace.newBlock('titleSelectorPlainLanguage')
        ).toBeDefined();
    });
});
