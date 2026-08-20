/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';
import { CssGenerator } from './css-generator';

export const cssForBlock = Object.create(null);

// Generator for style rule blocks.
cssForBlock['stylePlainLanguage'] = function (
    block: Blockly.Block,
    generator: CssGenerator
) {
    const selector =
        generator.valueToCode(
            block,
            'STYLE_SELECTOR',
            generator.ORDER_ATOMIC
        ) || '*';
    const styles = generator.statementToCode(block, 'STYLE_DECLARATIONS');
    const nextBlock = generator.blockToCode(block.getNextBlock());

    const code = `${selector} {\n${styles}}\n${nextBlock}`;
    return code;
};

const createSelectorGenerator = (cssSelector: string) =>
    function () {
        return [cssSelector, 0];
    };

const createPropertyGenerator = (
    cssProperty: string,
    fieldName: string,
    defaultValue: string
) =>
    function (block: Blockly.Block, generator: CssGenerator) {
        const value = block.getFieldValue(fieldName) || defaultValue;
        const nextBlock = generator.blockToCode(block.getNextBlock());

        return `${cssProperty}: ${value};\n${nextBlock}`;
    };

// Generator for page and layout selectors.
cssForBlock['htmlSelectorPlainLanguage'] = createSelectorGenerator('html');
cssForBlock['headSelectorPlainLanguage'] = createSelectorGenerator('head');
cssForBlock['bodySelectorPlainLanguage'] = createSelectorGenerator('body');
cssForBlock['titleSelectorPlainLanguage'] = createSelectorGenerator('title');
cssForBlock['headerSelectorPlainLanguage'] = createSelectorGenerator('header');
cssForBlock['footerSelectorPlainLanguage'] = createSelectorGenerator('footer');
cssForBlock['backgroundColorPlainLanguage'] = createPropertyGenerator(
    'background-color',
    'BACKGROUND_VALUE',
    'white'
);
cssForBlock['displayPlainLanguage'] = createPropertyGenerator(
    'display',
    'DISPLAY_VALUE',
    'block'
);

// Generator for heading selectors.
cssForBlock['hSelectorPlainLanguage'] = function (block: Blockly.Block) {
    const headingLevel = block.getFieldValue('SELECTOR_VALUE') || 'h1';
    return [headingLevel, 0];
};

// Generator for text selectors.
cssForBlock['pSelectorPlainLanguage'] = createSelectorGenerator('p');
cssForBlock['ulSelectorPlainLanguage'] = createSelectorGenerator('ul');
cssForBlock['olSelectorPlainLanguage'] = createSelectorGenerator('ol');
cssForBlock['liSelectorPlainLanguage'] = createSelectorGenerator('li');
cssForBlock['aSelectorPlainLanguage'] = createSelectorGenerator('a');
cssForBlock['textColorPlainLanguage'] = createPropertyGenerator(
    'color',
    'COLOR_VALUE',
    'black'
);
cssForBlock['textAlignPlainLanguage'] = createPropertyGenerator(
    'text-align',
    'TEXT_ALIGN_VALUE',
    'left'
);
cssForBlock['fontWeightPlainLanguage'] = createPropertyGenerator(
    'font-weight',
    'FONT_WEIGHT_VALUE',
    'normal'
);

// Generator for media selectors.
cssForBlock['imgSelectorPlainLanguage'] = createSelectorGenerator('img');
cssForBlock['objectFitPlainLanguage'] = createPropertyGenerator(
    'object-fit',
    'OBJECT_FIT_VALUE',
    'contain'
);

// Generator for table selectors.
cssForBlock['tableSelectorPlainLanguage'] = createSelectorGenerator('table');
cssForBlock['trSelectorPlainLanguage'] = createSelectorGenerator('tr');
cssForBlock['thSelectorPlainLanguage'] = createSelectorGenerator('th');
cssForBlock['tdSelectorPlainLanguage'] = createSelectorGenerator('td');
cssForBlock['borderCollapsePlainLanguage'] = createPropertyGenerator(
    'border-collapse',
    'BORDER_COLLAPSE_VALUE',
    'collapse'
);
cssForBlock['tableLayoutPlainLanguage'] = createPropertyGenerator(
    'table-layout',
    'TABLE_LAYOUT_VALUE',
    'auto'
);
