var queryName = 'getItem';

var formConfig = [
    {
        type: 'text',
        label: 'name',
        keyName: 'name'
    },
    {
        type: 'text',
        label: 'description',
        keyName: 'description'
    },
    {
        type: 'text',
        label: 'price',
        keyName: 'price'
    },
    {
        type: 'text',
        label: 'imgSrc',
        keyName: 'imgSrc'
    },
    {
        type: 'text',
        label: 'Created Date',
        keyName: 'created'
    },
    {
        type: 'text',
        label: 'Modified Date',
        keyName: 'modified'
    }
];

module.exports = {
    queryName,
    formConfig
}