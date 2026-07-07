import * as Blockly from 'blockly/core';

const AQUA = '#5BA58C';
const RED = '#A55B5B';
const PINK = '#A55B80';
const ORANGE = '#A5745B';
const GREEN = '#80A55B';

export const webLanguageTheme = Blockly.Theme.defineTheme('webLanguageTheme', {
    name: 'webLanguageTheme',
    base: Blockly.Themes.Classic,
    categoryStyles: {
        page_category: {
            colour: RED,
        },
        table_category: {
            colour: ORANGE,
        },
        media_category: {
            colour: GREEN,
        },
        text_category: {
            colour: PINK,
        },
        style_category: {
            colour: AQUA,
        },
    },
});
