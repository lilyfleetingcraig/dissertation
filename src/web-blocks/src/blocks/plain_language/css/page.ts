const PAGE_BLOCK_COLOUR = 0;

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
    colour: PAGE_BLOCK_COLOUR,
    cssSelector,
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
    colour: PAGE_BLOCK_COLOUR,
    inputsInline: true,
});

const websitePageSelector = createStaticSelectorBlock(
    'htmlSelectorPlainLanguage',
    'Website Page',
    'html',
    'Select the website page element'
);

const metadataSelector = createStaticSelectorBlock(
    'headSelectorPlainLanguage',
    'Metadata',
    'head',
    'Select the metadata element'
);

const contentSelector = createStaticSelectorBlock(
    'bodySelectorPlainLanguage',
    'Content',
    'body',
    'Select the content element'
);

const pageTitleSelector = createStaticSelectorBlock(
    'titleSelectorPlainLanguage',
    'Page Title',
    'title',
    'Select the page title element'
);

const headerSelector = createStaticSelectorBlock(
    'headerSelectorPlainLanguage',
    'Header',
    'header',
    'Select the header element'
);

const footerSelector = createStaticSelectorBlock(
    'footerSelectorPlainLanguage',
    'Footer',
    'footer',
    'Select the footer element'
);

const backgroundColourProperty = createDropdownPropertyBlock(
    'backgroundColorPlainLanguage',
    'Background colour',
    'Set the background colour',
    'BACKGROUND_VALUE',
    [
        ['white', 'white'],
        ['light gray', 'lightgray'],
        ['beige', 'beige'],
        ['transparent', 'transparent'],
    ]
);

const displayProperty = createDropdownPropertyBlock(
    'displayPlainLanguage',
    'Display',
    'Set how the element is displayed',
    'DISPLAY_VALUE',
    [
        ['block', 'block'],
        ['inline', 'inline'],
        ['inline block', 'inline-block'],
        ['flex', 'flex'],
        ['grid', 'grid'],
        ['none', 'none'],
    ]
);

export const pageBlocks = {
    htmlSelectorPlainLanguage: websitePageSelector,
    headSelectorPlainLanguage: metadataSelector,
    bodySelectorPlainLanguage: contentSelector,
    titleSelectorPlainLanguage: pageTitleSelector,
    headerSelectorPlainLanguage: headerSelector,
    footerSelectorPlainLanguage: footerSelector,
    backgroundColorPlainLanguage: backgroundColourProperty,
    displayPlainLanguage: displayProperty,
};
