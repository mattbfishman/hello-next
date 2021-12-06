module.exports = {
    "form" : [
        {
            type: 'text',
            label: 'texttype'
        },
        {
            type: 'select',
            label: 'type',
            items: [
                {title: 'Item', value: "item"},
                {title: 'Page', value: "page"},
                {title: 'Blog', value: "blog"}
            ]
        }
    ]
};