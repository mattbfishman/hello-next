var queryNames = {
        item: 'addItem'
    },
    formConfig = [
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
        }
    ],
    variables = [
        '_id',
        'name',
        'description',
        'modified'
    ],
    validTypes = [
        'item'
    ],
    typeKey = "pageType";

module.exports = {
    formConfig,
    queryNames,
    variables,
    validTypes,
    typeKey
}
