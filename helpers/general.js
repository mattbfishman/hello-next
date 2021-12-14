import {PAGE_CONFIGS, GRAPHQL_ENDPOINT} from '../constants/general';
import {QUERIES} from '../constants/api';
import { request } from "graphql-request";

 

function getConfig(type = '') {
    return PAGE_CONFIGS && PAGE_CONFIGS[type] || {};
}

async function makeRequest(name = '', variables = {}){
    var queryName = QUERIES[name];

    if(queryName) {
        return await request(GRAPHQL_ENDPOINT, queryName, variables); 
    } 

    return {};
}

module.exports = {
    getConfig,
    makeRequest
}