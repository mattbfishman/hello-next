import {pageConfigs, tableHeadings} from '../constants/general';

function getConfig(type = '') {
    return pageConfigs && pageConfigs[type] || {};
}

function getTableHeadings(type = ''){
    return tableHeadings && tableHeadings[type] || {};

}

module.exports = {
    getConfig,
    getTableHeadings
}