const MEDIA_BLOCK_COLOUR = 120;

const imageBlock = {
    type: 'imgPlainLanguage',
    tooltip: 'Insert an image',
    helpUrl: '',
    message0: 'Image',
    message1: 'Source %1',
    message2: 'Backup description %1',
    message3: 'Width %1 %2',
    message4: 'Height %1 %2',
    args1: [
        {
            type: 'field_input',
            name: 'SOURCE_URL',
            text: 'image.png',
            tooltip: 'Enter the image URL or file path',
        },
    ],
    args2: [
        {
            type: 'field_input',
            name: 'ALT_TEXT',
            text: 'Backup description',
            tooltip: 'Describe the image for accessibility',
        },
    ],
    args3: [
        {
            type: 'field_input',
            name: 'WIDTH_VALUE',
            text: '320',
            tooltip: 'Set the image width value',
        },
        {
            type: 'field_dropdown',
            name: 'WIDTH_UNIT',
            options: [
                ['pixels', 'px'],
                ['percent', '%'],
                ['em', 'em'],
                ['rem', 'rem'],
                ['auto', 'auto'],
            ],
        },
    ],
    args4: [
        {
            type: 'field_input',
            name: 'HEIGHT_VALUE',
            text: '240',
            tooltip: 'Set the image height value',
        },
        {
            type: 'field_dropdown',
            name: 'HEIGHT_UNIT',
            options: [
                ['pixels', 'px'],
                ['percent', '%'],
                ['em', 'em'],
                ['rem', 'rem'],
                ['auto', 'auto'],
            ],
        },
    ],
    colour: MEDIA_BLOCK_COLOUR,
    previousStatement: null,
    nextStatement: null,
    inputsInline: false,
};

export const mediaBlocks = {
    imgPlainLanguage: imageBlock,
};
