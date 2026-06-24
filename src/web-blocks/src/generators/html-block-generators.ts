/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';
import { HtmlGenerator } from './html-generator';

export const htmlForBlock = Object.create(null);

// Generator for the website block.
htmlForBlock['_head_'] = function (
    block: Blockly.Block,
    generator: HtmlGenerator
) {
    const statements = generator.statementToCode(block, 'CONTENT');
    const nextBlock = generator.blockToCode(block.getNextBlock());
    const code = `<html>\n${statements}</html>\n${nextBlock}`;
    return code;
};

// Generator for the paragraph block.
htmlForBlock['paragraph'] = function (
    block: Blockly.Block,
    generator: HtmlGenerator
) {
    const text = block.getFieldValue('TEXT') || 'Paragraph text';
    const nextBlock = generator.blockToCode(block.getNextBlock());
    const code = `<p>${text}</p>\n${nextBlock}`;
    return code;
};
