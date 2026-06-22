export const toolbox = {
    kind: 'categoryToolbox',
    contents: [
        {
            kind: 'category',
            name: 'Style',
            categorystyle: 'style_category',
            contents: [
                {
                    kind: 'block',
                    type: 'style_rule',
                },
            ],
        },
        {
            kind: 'sep',
            gap: 12,
        },
        {
            kind: 'category',
            name: 'Page',
            categorystyle: 'page_category',
            contents: [
                {
                    kind: 'block',
                    type: 'websitePageSelector',
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
                    type: 'paragraphSelector',
                },
                {
                    kind: 'block',
                    type: 'textColour',
                },
            ],
        },
    ],
};
