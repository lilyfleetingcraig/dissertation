import * as Blockly from 'blockly/core';

import * as pageBlocks from './plain_language/html/page';
import * as textBlocks from './plain_language/html/text';
import * as styleBlocks from './plain_language/css/style';
import * as cssTextBlocks from './plain_language/css/text';

// Pool HTML block definitions
const htmlBlockList = [
    ...Object.values(pageBlocks.page),
    ...Object.values(textBlocks.text),
];

// Pool CSS block definitions
const cssBlockList = [
    ...Object.values(styleBlocks.style),
    ...Object.values(cssTextBlocks.selectors),
];

// Export both block sets
export const htmlBlocks =
    Blockly.common.createBlockDefinitionsFromJsonArray(htmlBlockList);
export const cssBlocks =
    Blockly.common.createBlockDefinitionsFromJsonArray(cssBlockList);
