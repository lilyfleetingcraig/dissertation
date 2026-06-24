/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';
import { CssGenerator } from './css-generator';

export const cssForBlock = Object.create(null);

// Generator for style rule blocks.
cssForBlock['style_rule'] = function (
    block: Blockly.Block,
    generator: CssGenerator
) {
    const selector = generator.valueToCode(
        block,
        'SELECTOR',
        generator.ORDER_ATOMIC
    );
    const styles = generator.statementToCode(block, 'STYLES');
    const nextBlock = generator.blockToCode(block.getNextBlock());

    const code = `${selector} {\n${styles}}\n${nextBlock}`;
    return code;
};

// Generator for paragraph selector.
cssForBlock['paragraphSelector'] = function () {
    const code = 'p';
    return [code, 0];
};

// Generator for website page selector.
cssForBlock['websitePageSelector'] = function () {
    const code = 'html';
    return [code, 0];
};

// Generator for text colour property.
cssForBlock['textColour'] = function (
    block: Blockly.Block,
    generator: CssGenerator
) {
    const colour = block.getFieldValue('COLOUR') || 'black';
    const nextBlock = generator.blockToCode(block.getNextBlock());

    const code = `color: ${colour};\n${nextBlock}`;
    return code;
};
