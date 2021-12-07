module.exports = {
    "form" : [
        {
            type: 'text',
            label: 'name',
            keyName: 'name',
            placeholder: 'Enter a name'
        },
        {
            type: 'select',
            label: 'type',
            keyName: 'pageType',
            items: [
                {title: 'Item', value: "item"},
                {title: 'Page', value: "page"},
                {title: 'Blog', value: "blog"}
            ]
        }
    ]
};