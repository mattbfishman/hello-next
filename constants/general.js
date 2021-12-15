import create from '../configs/create';
import items from '../configs/items';
import item from '../configs/item';

var PAGE_CONFIGS = {
    create : create,
    view   : {
        items: item
    },
    explore : {
        items: items
    }
};

var PAGE_NAMES = {
    EXPLORE : 'explore',
    VIEW    : 'view'
};

var GRAPHQL_ENDPOINT = 'http://localhost:4000/graphql';

module.exports = {
    PAGE_CONFIGS,
    GRAPHQL_ENDPOINT,
    PAGE_NAMES
}