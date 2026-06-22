const styleRule = {
    type: 'style_rule',
    tooltip: 'Define a style rule for an element type',
    helpUrl: '',
    message0: 'Style rule for type %1 %2 %3 %4',
    args0: [
        {
            type: 'input_value',
            name: 'SELECTOR',
        },
        {
            type: 'input_dummy',
            name: 'DIVIDER1',
        },
        {
            type: 'input_statement',
            name: 'STYLES',
        },
        {
            type: 'input_dummy',
            name: 'DIVIDER2',
        },
    ],
    colour: 165,
};

export const style = {
    style_rule: styleRule,
};
