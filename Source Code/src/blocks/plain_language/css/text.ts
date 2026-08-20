const TEXT_BLOCK_COLOUR = 330;

const createStaticSelectorBlock = (
    blockType: string,
    blockLabel: string,
    cssSelector: string,
    tooltip: string
) => ({
    type: blockType,
    tooltip,
    helpUrl: '',
    message0: `${blockLabel} %1`,
    args0: [
        {
            type: 'input_dummy',
            name: 'SELECTOR_LABEL',
        },
    ],
    output: null,
    colour: TEXT_BLOCK_COLOUR,
    cssSelector,
});

const createDropdownSelectorBlock = (
    blockType: string,
    blockLabel: string,
    colour: number,
    tooltip: string,
    options: Array<[string, string]>
) => ({
    type: blockType,
    tooltip,
    helpUrl: '',
    message0: `${blockLabel} %1`,
    args0: [
        {
            type: 'field_dropdown',
            name: 'SELECTOR_VALUE',
            options,
        },
    ],
    output: null,
    colour,
});

const createDropdownPropertyBlock = (
    blockType: string,
    blockLabel: string,
    tooltip: string,
    fieldName: string,
    options: Array<[string, string]>
) => ({
    type: blockType,
    tooltip,
    helpUrl: '',
    message0: `${blockLabel} %1`,
    args0: [
        {
            type: 'field_dropdown',
            name: fieldName,
            options,
        },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: TEXT_BLOCK_COLOUR,
    inputsInline: true,
});

const headingSelector = createDropdownSelectorBlock(
    'hSelectorPlainLanguage',
    'Heading level',
    TEXT_BLOCK_COLOUR,
    'Select a heading level',
    [
        ['Heading 1', 'h1'],
        ['Heading 2', 'h2'],
        ['Heading 3', 'h3'],
        ['Heading 4', 'h4'],
        ['Heading 5', 'h5'],
        ['Heading 6', 'h6'],
    ]
);

const paragraphSelector = createStaticSelectorBlock(
    'pSelectorPlainLanguage',
    'Paragraph',
    'p',
    'Select the paragraph element'
);

const unorderedListSelector = createStaticSelectorBlock(
    'ulSelectorPlainLanguage',
    'Unordered list',
    'ul',
    'Select the unordered list element'
);

const orderedListSelector = createStaticSelectorBlock(
    'olSelectorPlainLanguage',
    'Ordered list',
    'ol',
    'Select the ordered list element'
);

const listItemSelector = createStaticSelectorBlock(
    'liSelectorPlainLanguage',
    'List item',
    'li',
    'Select the list item element'
);

const anchorLinkSelector = createStaticSelectorBlock(
    'aSelectorPlainLanguage',
    'Link',
    'a',
    'Select the link element'
);

const textColorProperty = createDropdownPropertyBlock(
    'textColorPlainLanguage',
    'Text colour',
    'Set the text colour',
    'COLOR_VALUE',
    [
        ['black', 'black'],
        ['red', 'red'],
        ['blue', 'blue'],
        ['green', 'green'],
        ['gray', 'gray'],
        ['white', 'white'],
    ]
);

const textAlignProperty = createDropdownPropertyBlock(
    'textAlignPlainLanguage',
    'Text align',
    'Set how text is aligned',
    'TEXT_ALIGN_VALUE',
    [
        ['left', 'left'],
        ['center', 'center'],
        ['right', 'right'],
        ['justify', 'justify'],
    ]
);

const fontWeightProperty = createDropdownPropertyBlock(
    'fontWeightPlainLanguage',
    'Font weight',
    'Set how bold the text is',
    'FONT_WEIGHT_VALUE',
    [
        ['normal', 'normal'],
        ['bold', 'bold'],
        ['bolder', 'bolder'],
        ['lighter', 'lighter'],
    ]
);

export const textBlocks = {
    hSelectorPlainLanguage: headingSelector,
    pSelectorPlainLanguage: paragraphSelector,
    ulSelectorPlainLanguage: unorderedListSelector,
    olSelectorPlainLanguage: orderedListSelector,
    liSelectorPlainLanguage: listItemSelector,
    aSelectorPlainLanguage: anchorLinkSelector,
    textColorPlainLanguage: textColorProperty,
    textAlignPlainLanguage: textAlignProperty,
    fontWeightPlainLanguage: fontWeightProperty,
};
