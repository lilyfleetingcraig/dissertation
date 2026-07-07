const PAGE_BLOCK_COLOUR = 0;

const websitePageBlock = {
    type: 'htmlPlainLanguage',
    tooltip: 'Create the website page structure',
    helpUrl: '',
    message0: 'Website Page %1',
    args0: [
        {
            type: 'input_statement',
            name: 'PAGE_CONTENT',
        },
    ],
    colour: PAGE_BLOCK_COLOUR,
};

const metadataBlock = {
    type: 'headPlainLanguage',
    tooltip: 'Add metadata for the website page',
    helpUrl: '',
    message0: 'Metadata %1',
    args0: [
        {
            type: 'input_statement',
            name: 'METADATA_CONTENT',
        },
    ],
    colour: PAGE_BLOCK_COLOUR,
    previousStatement: null,
    nextStatement: null,
};

const stylesheetImportBlock = {
    type: 'stylesheetPlainLanguage',
    tooltip: 'Import a stylesheet into the page head',
    helpUrl: '',
    message0: 'Stylesheet %1',
    args0: [
        {
            type: 'field_input',
            name: 'STYLESHEET_URL',
            text: 'style.css',
        },
    ],
    colour: PAGE_BLOCK_COLOUR,
    previousStatement: null,
    nextStatement: null,
    inputsInline: true,
};

const contentBlock = {
    type: 'bodyPlainLanguage',
    tooltip: 'Add content for the website page',
    helpUrl: '',
    message0: 'Content %1',
    args0: [
        {
            type: 'input_statement',
            name: 'CONTENT_BLOCKS',
        },
    ],
    colour: PAGE_BLOCK_COLOUR,
    previousStatement: null,
    nextStatement: null,
};

const pageTitleBlock = {
    type: 'titlePlainLanguage',
    tooltip: 'Set the title shown in the browser tab',
    helpUrl: '',
    message0: 'Page Title %1',
    args0: [
        {
            type: 'field_input',
            name: 'TITLE_TEXT',
            text: 'Page title',
        },
    ],
    colour: PAGE_BLOCK_COLOUR,
    previousStatement: null,
    nextStatement: null,
    inputsInline: true,
};

const headerBlock = {
    type: 'headerPlainLanguage',
    tooltip: 'Create a page header',
    helpUrl: '',
    message0: 'Header %1',
    args0: [
        {
            type: 'input_statement',
            name: 'HEADER_CONTENT',
        },
    ],
    colour: PAGE_BLOCK_COLOUR,
    previousStatement: null,
    nextStatement: null,
};

const footerBlock = {
    type: 'footerPlainLanguage',
    tooltip: 'Create a page footer',
    helpUrl: '',
    message0: 'Footer %1',
    args0: [
        {
            type: 'input_statement',
            name: 'FOOTER_CONTENT',
        },
    ],
    colour: PAGE_BLOCK_COLOUR,
    previousStatement: null,
    nextStatement: null,
};

export const pageBlocks = {
    htmlPlainLanguage: websitePageBlock,
    headPlainLanguage: metadataBlock,
    bodyPlainLanguage: contentBlock,
    titlePlainLanguage: pageTitleBlock,
    stylesheetPlainLanguage: stylesheetImportBlock,
    headerPlainLanguage: headerBlock,
    footerPlainLanguage: footerBlock,
};
