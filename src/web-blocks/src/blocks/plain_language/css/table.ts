const TABLE_BLOCK_COLOUR = 30;

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
    colour: TABLE_BLOCK_COLOUR,
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
    colour: TABLE_BLOCK_COLOUR,
    inputsInline: true,
});

const tableSelector = createStaticSelectorBlock(
    'tableSelectorPlainLanguage',
    'Table',
    'table',
    'Select the table element'
);

const tableRowSelector = createStaticSelectorBlock(
    'trSelectorPlainLanguage',
    'Table row',
    'tr',
    'Select the table row element'
);

const tableHeaderCellSelector = createStaticSelectorBlock(
    'thSelectorPlainLanguage',
    'Table header cell',
    'th',
    'Select the table header cell element'
);

const tableCellSelector = createStaticSelectorBlock(
    'tdSelectorPlainLanguage',
    'Table cell',
    'td',
    'Select the table cell element'
);

const borderCollapseProperty = createDropdownPropertyBlock(
    'borderCollapsePlainLanguage',
    'Border collapse',
    'Set whether table borders collapse',
    'BORDER_COLLAPSE_VALUE',
    [
        ['collapse', 'collapse'],
        ['separate', 'separate'],
    ]
);

const tableLayoutProperty = createDropdownPropertyBlock(
    'tableLayoutPlainLanguage',
    'Table layout',
    'Set how the table is laid out',
    'TABLE_LAYOUT_VALUE',
    [
        ['auto', 'auto'],
        ['fixed', 'fixed'],
    ]
);

export const tableBlocks = {
    tableSelectorPlainLanguage: tableSelector,
    trSelectorPlainLanguage: tableRowSelector,
    thSelectorPlainLanguage: tableHeaderCellSelector,
    tdSelectorPlainLanguage: tableCellSelector,
    borderCollapsePlainLanguage: borderCollapseProperty,
    tableLayoutPlainLanguage: tableLayoutProperty,
};
