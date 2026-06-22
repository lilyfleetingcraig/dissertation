const paragraphBlock = {
    type: 'paragraph',
    tooltip: 'Create a paragraph',
    helpUrl: '',
    message0: 'Paragraph %1 %2',
    args0: [
        {
            type: 'field_input',
            name: 'TEXT',
            text: 'Paragraph text',
        },
        {
            type: 'input_dummy',
            name: 'CONTENT',
        },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 330,
};

export const text = {
    paragraph: paragraphBlock,
};
