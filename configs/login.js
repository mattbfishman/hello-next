var queryNames = 'login',
formConfig = [
    {
        type: 'text',
        label: 'username',
        keyName: 'username',
        span: 'all'
    },
    {
        type: 'password',
        label: 'password',
        keyName: 'password',
        span: 'all'
    },
    {
        type: 'button',
        label: 'submit',
        btnType: 'submit'
    },
],
variables = [
    'username',
    'password'
];

module.exports = {
    formConfig,
    variables,
    queryNames
}
