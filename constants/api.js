import GET_ITEMS from '../queries/getItems';
import GET_ITEM from '../queries/getItem';
import MODIFY_ITEM from '../queries/modifyItem';
import ADD_ITEM from '../queries/addItem';

var QUERIES = {
    getItem : GET_ITEM,
    getItems: GET_ITEMS,
    modifyItem: MODIFY_ITEM,
    addItem: ADD_ITEM
}

module.exports = {
    QUERIES
}