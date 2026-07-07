export const toolbox = {
    kind: 'categoryToolbox',
    contents: [
        {
            kind: 'category',
            name: 'Page',
            categorystyle: 'page_category',
            contents: [
                {
                    kind: 'block',
                    type: 'htmlPlainLanguage',
                    inputs: {
                        PAGE_CONTENT: {
                            block: {
                                type: 'headPlainLanguage',
                                inputs: {
                                    METADATA_CONTENT: {
                                        block: {
                                            type: 'stylesheetPlainLanguage',
                                            next: {
                                                block: {
                                                    type: 'titlePlainLanguage',
                                                    fields: {
                                                        TITLE_TEXT:
                                                            'Page title',
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                next: {
                                    block: {
                                        type: 'bodyPlainLanguage',
                                    },
                                },
                            },
                        },
                    },
                },
                {
                    kind: 'block',
                    type: 'htmlPlainLanguage',
                },
                {
                    kind: 'block',
                    type: 'headPlainLanguage',
                },
                {
                    kind: 'block',
                    type: 'bodyPlainLanguage',
                },
                {
                    kind: 'block',
                    type: 'titlePlainLanguage',
                },
                {
                    kind: 'block',
                    type: 'stylesheetPlainLanguage',
                },
                {
                    kind: 'block',
                    type: 'headerPlainLanguage',
                },
                {
                    kind: 'block',
                    type: 'footerPlainLanguage',
                },
            ],
        },
        {
            kind: 'category',
            name: 'Tables',
            categorystyle: 'table_category',
            contents: [
                {
                    kind: 'block',
                    type: 'tablePlainLanguage',
                    inputs: {
                        TABLE_ROWS: {
                            block: {
                                type: 'trPlainLanguage',
                                inputs: {
                                    ROW_CELLS: {
                                        block: {
                                            type: 'thPlainLanguage',
                                            fields: {
                                                CELL_TEXT: 'Header',
                                            },
                                            next: {
                                                block: {
                                                    type: 'tdPlainLanguage',
                                                    fields: {
                                                        CELL_TEXT: 'Cell 1',
                                                    },
                                                    next: {
                                                        block: {
                                                            type: 'tdPlainLanguage',
                                                            fields: {
                                                                CELL_TEXT:
                                                                    'Cell 2',
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                {
                    kind: 'block',
                    type: 'tablePlainLanguage',
                },
                {
                    kind: 'block',
                    type: 'trPlainLanguage',
                },
                {
                    kind: 'block',
                    type: 'thPlainLanguage',
                },
                {
                    kind: 'block',
                    type: 'tdPlainLanguage',
                },
            ],
        },
        {
            kind: 'category',
            name: 'Media',
            categorystyle: 'media_category',
            contents: [
                {
                    kind: 'block',
                    type: 'imgPlainLanguage',
                },
            ],
        },
        {
            kind: 'category',
            name: 'Text',
            categorystyle: 'text_category',
            contents: [
                {
                    kind: 'block',
                    type: 'ulPlainLanguage',
                    inputs: {
                        LIST_ITEMS: {
                            block: {
                                type: 'liPlainLanguage',
                                fields: {
                                    ITEM_TEXT: 'Item 1',
                                },
                                next: {
                                    block: {
                                        type: 'liPlainLanguage',
                                        fields: {
                                            ITEM_TEXT: 'Item 2',
                                        },
                                        next: {
                                            block: {
                                                type: 'liPlainLanguage',
                                                fields: {
                                                    ITEM_TEXT: 'Item 3',
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                {
                    kind: 'block',
                    type: 'hPlainLanguage',
                },
                {
                    kind: 'block',
                    type: 'pPlainLanguage',
                },
                {
                    kind: 'block',
                    type: 'ulPlainLanguage',
                },
                {
                    kind: 'block',
                    type: 'olPlainLanguage',
                },
                {
                    kind: 'block',
                    type: 'liPlainLanguage',
                },
                {
                    kind: 'block',
                    type: 'aPlainLanguage',
                },
            ],
        },
    ],
};
