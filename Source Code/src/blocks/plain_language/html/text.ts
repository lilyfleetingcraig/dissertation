const TEXT_BLOCK_COLOUR = 330;

const headingTextBlock = {
    type: 'hPlainLanguage',
    tooltip: 'Create a heading',
    helpUrl: '',
    message0: 'Heading %1 %2',
    args0: [
        {
            type: 'field_dropdown',
            name: 'HEADING_LEVEL',
            options: [
                ['Heading 1', 'h1'],
                ['Heading 2', 'h2'],
                ['Heading 3', 'h3'],
                ['Heading 4', 'h4'],
                ['Heading 5', 'h5'],
                ['Heading 6', 'h6'],
            ],
        },
        {
            type: 'field_input',
            name: 'HEADING_TEXT',
            text: 'Heading text',
        },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: TEXT_BLOCK_COLOUR,
    inputsInline: true,
};

const paragraphBlock = {
    type: 'pPlainLanguage',
    tooltip: 'Create a paragraph',
    helpUrl: '',
    message0: 'Paragraph %1',
    args0: [
        {
            type: 'field_input',
            name: 'PARAGRAPH_TEXT',
            text: 'Paragraph text',
        },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: TEXT_BLOCK_COLOUR,
    inputsInline: true,
};

const unorderedListBlock = {
    type: 'ulPlainLanguage',
    tooltip: 'Create an unordered list',
    helpUrl: '',
    message0: 'Unordered list %1',
    args0: [
        {
            type: 'input_statement',
            name: 'LIST_ITEMS',
        },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: TEXT_BLOCK_COLOUR,
};

const orderedListBlock = {
    type: 'olPlainLanguage',
    tooltip: 'Create an ordered list',
    helpUrl: '',
    message0: 'Ordered list %1',
    args0: [
        {
            type: 'input_statement',
            name: 'LIST_ITEMS',
        },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: TEXT_BLOCK_COLOUR,
};

const listItemBlock = {
    type: 'liPlainLanguage',
    tooltip: 'Create a list item',
    helpUrl: '',
    message0: 'List item %1',
    args0: [
        {
            type: 'field_input',
            name: 'ITEM_TEXT',
            text: 'List item text',
        },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: TEXT_BLOCK_COLOUR,
    inputsInline: true,
};

const anchorLinkBlock = {
    type: 'aPlainLanguage',
    tooltip: 'Create a link',
    helpUrl: '',
    message0: 'Link %1 %2',
    args0: [
        {
            type: 'field_input',
            name: 'LINK_TEXT',
            text: 'Link text',
        },
        {
            type: 'field_input',
            name: 'LINK_URL',
            text: 'https://example.com',
        },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: TEXT_BLOCK_COLOUR,
    inputsInline: true,
};

export const textBlocks = {
    hPlainLanguage: headingTextBlock,
    pPlainLanguage: paragraphBlock,
    ulPlainLanguage: unorderedListBlock,
    olPlainLanguage: orderedListBlock,
    liPlainLanguage: listItemBlock,
    aPlainLanguage: anchorLinkBlock,
};
