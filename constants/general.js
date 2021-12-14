import create from '../configs/create';
import items from '../configs/items';

var PAGE_CONFIGS = {
    create : create,
    items  : items
};

var GRAPHQL_ENDPOINT = 'http://localhost:4000/graphql';

module.exports = {
    PAGE_CONFIGS,
    GRAPHQL_ENDPOINT
}