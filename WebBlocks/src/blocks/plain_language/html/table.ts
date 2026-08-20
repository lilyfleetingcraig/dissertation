const TABLE_BLOCK_COLOUR = 30;

const tableBlock = {
    type: 'tablePlainLanguage',
    tooltip: 'Create a table',
    helpUrl: '',
    message0: 'Table %1',
    args0: [
        {
            type: 'input_statement',
            name: 'TABLE_ROWS',
        },
    ],
    colour: TABLE_BLOCK_COLOUR,
    previousStatement: null,
    nextStatement: null,
};

const tableRowBlock = {
    type: 'trPlainLanguage',
    tooltip: 'Create a table row',
    helpUrl: '',
    message0: 'Table row %1',
    args0: [
        {
            type: 'input_statement',
            name: 'ROW_CELLS',
        },
    ],
    colour: TABLE_BLOCK_COLOUR,
    previousStatement: null,
    nextStatement: null,
};

const tableHeaderCellBlock = {
    type: 'thPlainLanguage',
    tooltip: 'Create a table header cell',
    helpUrl: '',
    message0: 'Table header cell %1',
    args0: [
        {
            type: 'field_input',
            name: 'CELL_TEXT',
            text: 'Header cell',
        },
    ],
    colour: TABLE_BLOCK_COLOUR,
    previousStatement: null,
    nextStatement: null,
    inputsInline: true,
};

const tableCellBlock = {
    type: 'tdPlainLanguage',
    tooltip: 'Create a table cell',
    helpUrl: '',
    message0: 'Table cell %1',
    args0: [
        {
            type: 'field_input',
            name: 'CELL_TEXT',
            text: 'Cell text',
        },
    ],
    colour: TABLE_BLOCK_COLOUR,
    previousStatement: null,
    nextStatement: null,
    inputsInline: true,
};

export const tableBlocks = {
    tablePlainLanguage: tableBlock,
    trPlainLanguage: tableRowBlock,
    thPlainLanguage: tableHeaderCellBlock,
    tdPlainLanguage: tableCellBlock,
};
