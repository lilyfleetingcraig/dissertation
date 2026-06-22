/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { Order } from 'blockly/javascript';
import * as Blockly from 'blockly/core';

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const forBlock = Object.create(null);

forBlock['add_text'] = function (
    block: Blockly.Block,
    generator: Blockly.CodeGenerator
) {
    const text = generator.valueToCode(block, 'TEXT', Order.NONE) || "''";
    const addText = generator.provideFunction_(
        'addText',
        `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(text) {

  // Add text to the output area.
  const outputDiv = document.getElementById('output');
  const textEl = document.createElement('p');
  textEl.innerText = text;
  outputDiv.appendChild(textEl);
}`
    );
    // Generate the function call for this block.
    const code = `${addText}(${text});\n`;
    return code;
};

// Generator for the website/head block
forBlock['_head_'] = function (
    block: Blockly.Block,
    generator: Blockly.CodeGenerator
) {
    const statements = generator.statementToCode(block, 'NAME');
    const code = `<html>\n${statements}</html>`;
    return code;
};

// Generator for the paragraph block
forBlock['paragraph'] = function (block: Blockly.Block) {
    const text = block.getFieldValue('NAME') || 'Paragraph text';
    const code = `<p>${text}</p>\n`;
    return code;
};
