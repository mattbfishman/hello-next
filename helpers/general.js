import {pageConfigs} from '../constants/general';

function getConfig(type = '') {
    return pageConfigs && pageConfigs[type] || {};
}


module.exports = {
    getConfig
}