const STYLE_BLOCK_COLOUR = 165;

const styleRuleBlock = {
    type: 'stylePlainLanguage',
    tooltip: 'Define a CSS style rule',
    helpUrl: '',
    message0: 'Style rule %1 %2 %3 %4',
    args0: [
        {
            type: 'input_value',
            name: 'STYLE_SELECTOR',
        },
        {
            type: 'input_dummy',
            name: 'SELECTOR_SPACER',
        },
        {
            type: 'input_statement',
            name: 'STYLE_DECLARATIONS',
        },
        {
            type: 'input_dummy',
            name: 'STYLE_CLOSER',
        },
    ],
    colour: STYLE_BLOCK_COLOUR,
};

export const styleBlocks = {
    stylePlainLanguage: styleRuleBlock,
};
