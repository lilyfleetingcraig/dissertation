import * as Blockly from 'blockly/core';

import * as pageBlocks from './plain_language/html/page';
import * as textBlocks from './plain_language/html/text';
import * as mediaBlocks from './plain_language/html/media';
import * as tableBlocks from './plain_language/html/table';
import * as styleBlocks from './plain_language/css/style';
import * as cssPageBlocks from './plain_language/css/page';
import * as cssTextBlocks from './plain_language/css/text';
import * as cssTableBlocks from './plain_language/css/table';
import * as cssMediaBlocks from './plain_language/css/media';

// Pool HTML block definitions
const htmlBlockList = [
    ...Object.values(pageBlocks.pageBlocks),
    ...Object.values(textBlocks.textBlocks),
    ...Object.values(mediaBlocks.mediaBlocks),
    ...Object.values(tableBlocks.tableBlocks),
];

// Pool CSS block definitions
const cssBlockList = [
    ...Object.values(styleBlocks.styleBlocks),
    ...Object.values(cssPageBlocks.pageBlocks),
    ...Object.values(cssTextBlocks.textBlocks),
    ...Object.values(cssTableBlocks.tableBlocks),
    ...Object.values(cssMediaBlocks.mediaBlocks),
];

// Export both block sets
export const htmlBlocks =
    Blockly.common.createBlockDefinitionsFromJsonArray(htmlBlockList);
export const cssBlocks =
    Blockly.common.createBlockDefinitionsFromJsonArray(cssBlockList);
