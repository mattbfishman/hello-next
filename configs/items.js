var headings =  [
    'name',
    'description',
    'modified',
    'created'
];

var keyBlacklist = [
    '_id',
]

var queryName = 'getItems';

module.exports = {
    keyBlacklist,
    headings,
    queryName
}