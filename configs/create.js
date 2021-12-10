var formConfig = [
    {
        type: 'text',
        label: 'name',
        keyName: 'name',
        placeholder: 'Enter A Name'
    },
    {
        type: 'select',
        label: 'type',
        keyName: 'pageType',
        items: [
            {title: '--', value: false},
            {title: 'Item', value: "item"},
            {title: 'Page', value: "page"},
            {title: 'Blog', value: "blog"}
        ]
    },
    {
        type: 'text',
        label: 'description',
        keyName: 'description',
        placeholder: 'Enter A Description'
    },
    {
        type: 'button',
        label: 'Submit',
        btnType: 'form'
    }
];

module.exports = {
    formConfig
}
