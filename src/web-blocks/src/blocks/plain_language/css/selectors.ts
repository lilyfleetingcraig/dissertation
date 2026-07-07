import { pageBlocks } from './page';
import { textBlocks } from './text';
import { tableBlocks } from './table';
import { mediaBlocks } from './media';

export const selectorBlocks = {
    ...pageBlocks,
    ...textBlocks,
    ...tableBlocks,
    ...mediaBlocks,
};
