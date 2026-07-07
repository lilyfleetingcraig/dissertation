/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';
import { HtmlGenerator } from './html-generator';

export const htmlForBlock = Object.create(null);

const createContainerGenerator = (
    tagName: string,
    statementInputName: string
) => {
    return function (block: Blockly.Block, generator: HtmlGenerator) {
        const nestedBlocks = generator.statementToCode(
            block,
            statementInputName
        );
        const nextBlock = generator.blockToCode(block.getNextBlock());

        return `<${tagName}>\n${nestedBlocks}</${tagName}>\n${nextBlock}`;
    };
};

const createTextElementGenerator = (
    tagName: string,
    fieldName: string,
    defaultText: string
) => {
    return function (block: Blockly.Block, generator: HtmlGenerator) {
        const textValue = block.getFieldValue(fieldName) || defaultText;
        const nextBlock = generator.blockToCode(block.getNextBlock());

        return `<${tagName}>${textValue}</${tagName}>\n${nextBlock}`;
    };
};

htmlForBlock['htmlPlainLanguage'] = createContainerGenerator(
    'html',
    'PAGE_CONTENT'
);

htmlForBlock['headPlainLanguage'] = createContainerGenerator(
    'head',
    'METADATA_CONTENT'
);

htmlForBlock['stylesheetPlainLanguage'] = function (block: Blockly.Block) {
    const stylesheetUrl = block.getFieldValue('STYLESHEET_URL') || 'style.css';
    return `<link rel="stylesheet" href="${stylesheetUrl}">\n`;
};

htmlForBlock['bodyPlainLanguage'] = createContainerGenerator(
    'body',
    'CONTENT_BLOCKS'
);

htmlForBlock['titlePlainLanguage'] = createTextElementGenerator(
    'title',
    'TITLE_TEXT',
    'Page title'
);

htmlForBlock['headerPlainLanguage'] = createContainerGenerator(
    'header',
    'HEADER_CONTENT'
);

htmlForBlock['footerPlainLanguage'] = createContainerGenerator(
    'footer',
    'FOOTER_CONTENT'
);

htmlForBlock['hPlainLanguage'] = function (
    block: Blockly.Block,
    generator: HtmlGenerator
) {
    const headingLevel = block.getFieldValue('HEADING_LEVEL') || 'h1';
    const headingText = block.getFieldValue('HEADING_TEXT') || 'Heading text';
    const nextBlock = generator.blockToCode(block.getNextBlock());

    return `<${headingLevel}>${headingText}</${headingLevel}>\n${nextBlock}`;
};

htmlForBlock['pPlainLanguage'] = createTextElementGenerator(
    'p',
    'PARAGRAPH_TEXT',
    'Paragraph text'
);

htmlForBlock['ulPlainLanguage'] = createContainerGenerator('ul', 'LIST_ITEMS');

htmlForBlock['olPlainLanguage'] = createContainerGenerator('ol', 'LIST_ITEMS');

htmlForBlock['liPlainLanguage'] = createTextElementGenerator(
    'li',
    'ITEM_TEXT',
    'List item text'
);

htmlForBlock['aPlainLanguage'] = function (
    block: Blockly.Block,
    generator: HtmlGenerator
) {
    const linkText = block.getFieldValue('LINK_TEXT') || 'Link text';
    const linkUrl = block.getFieldValue('LINK_URL') || 'https://example.com';
    const nextBlock = generator.blockToCode(block.getNextBlock());

    return `<a href="${linkUrl}">${linkText}</a>\n${nextBlock}`;
};

htmlForBlock['imgPlainLanguage'] = function (
    block: Blockly.Block,
    generator: HtmlGenerator
) {
    const sourceUrl = block.getFieldValue('SOURCE_URL') || 'image.png';
    const altText = block.getFieldValue('ALT_TEXT') || 'Image description';
    const widthValue = block.getFieldValue('WIDTH_VALUE') || '320';
    const widthUnit = block.getFieldValue('WIDTH_UNIT') || 'px';
    const heightValue = block.getFieldValue('HEIGHT_VALUE') || '240';
    const heightUnit = block.getFieldValue('HEIGHT_UNIT') || 'px';
    const nextBlock = generator.blockToCode(block.getNextBlock());
    const inlineStyles = [
        widthUnit === 'auto'
            ? 'width: auto;'
            : `width: ${widthValue}${widthUnit};`,
        heightUnit === 'auto'
            ? 'height: auto;'
            : `height: ${heightValue}${heightUnit};`,
    ].join(' ');

    return `<img src="${sourceUrl}" alt="${altText}" style="${inlineStyles}">\n${nextBlock}`;
};

htmlForBlock['tablePlainLanguage'] = createContainerGenerator(
    'table',
    'TABLE_ROWS'
);

htmlForBlock['trPlainLanguage'] = createContainerGenerator('tr', 'ROW_CELLS');

htmlForBlock['thPlainLanguage'] = createTextElementGenerator(
    'th',
    'CELL_TEXT',
    'Header cell'
);

htmlForBlock['tdPlainLanguage'] = createTextElementGenerator(
    'td',
    'CELL_TEXT',
    'Cell text'
);
