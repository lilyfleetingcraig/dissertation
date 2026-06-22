const paragraphSelector = {
    type: 'paragraphSelector',
    tooltip: 'Select paragraph element',
    helpUrl: '',
    message0: 'Paragraph %1',
    args0: [
        {
            type: 'input_dummy',
            name: 'NAME',
        },
    ],
    output: null,
    colour: 330,
};

const websitePageSelector = {
    type: 'websitePageSelector',
    tooltip: 'Select website page',
    helpUrl: '',
    message0: 'Website Page %1',
    args0: [
        {
            type: 'input_dummy',
            name: 'NAME',
        },
    ],
    output: null,
    colour: 0,
};

const textColour = {
    type: 'textColour',
    tooltip: 'Set text colour',
    helpUrl: '',
    message0: '%1 %2 %3 %4',
    args0: [
        {
            type: 'field_label_serializable',
            text: 'Text colour:',
            name: 'LABEL',
        },
        {
            type: 'field_dropdown',
            name: 'COLOUR',
            options: [
                ['red', 'red'],
                ['blue', 'blue'],
            ],
        },
        {
            type: 'input_dummy',
            name: 'DIVIDER1',
            align: 'CENTRE',
        },
        {
            type: 'input_dummy',
            name: 'DIVIDER2',
        },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 330,
    inputsInline: true,
};

export const selectors = {
    paragraphSelector,
    websitePageSelector,
    textColour,
};
