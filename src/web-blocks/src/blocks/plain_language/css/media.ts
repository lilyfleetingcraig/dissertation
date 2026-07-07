const MEDIA_BLOCK_COLOUR = 120;

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
    colour: MEDIA_BLOCK_COLOUR,
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
    colour: MEDIA_BLOCK_COLOUR,
    inputsInline: true,
});

const imageSelector = createStaticSelectorBlock(
    'imgSelectorPlainLanguage',
    'Image',
    'img',
    'Select the image element'
);

const objectFitProperty = createDropdownPropertyBlock(
    'objectFitPlainLanguage',
    'Object fit',
    'Set how the image fits its box',
    'OBJECT_FIT_VALUE',
    [
        ['fill', 'fill'],
        ['contain', 'contain'],
        ['cover', 'cover'],
        ['none', 'none'],
        ['scale down', 'scale-down'],
    ]
);

export const mediaBlocks = {
    imgSelectorPlainLanguage: imageSelector,
    objectFitPlainLanguage: objectFitProperty,
};
