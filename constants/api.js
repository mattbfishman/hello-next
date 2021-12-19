import GET_ITEMS from '../queries/getItems';
import GET_ITEM from '../queries/getItem';
import MODIFY_ITEM from '../queries/modifyItem';

var QUERIES = {
    getItem : GET_ITEM,
    getItems: GET_ITEMS,
    modifyItem: MODIFY_ITEM
}

module.exports = {
    QUERIES
}