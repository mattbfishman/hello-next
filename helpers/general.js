import {PAGE_CONFIGS, GRAPHQL_ENDPOINT} from '../constants/general';
import {MODIFIED} from './date';
import {QUERIES} from '../constants/api';
import { request } from "graphql-request";
import { forEach } from 'lodash';

function getConfig(type = '', pageName) {
    var config;
    if(pageName){
        config = PAGE_CONFIGS && PAGE_CONFIGS[pageName];    
    }

    return config && config[type] || PAGE_CONFIGS && PAGE_CONFIGS[type] || {};
}

async function makeRequest(name = '', variables = {}){
    var queryName = QUERIES[name];

    if(queryName) {
        return await request(GRAPHQL_ENDPOINT, queryName, variables); 
    } 

    return null;
}

function mapVariables(variables = [], object = {}){
    var ret = {};

    forEach(variables, function(variable){
        let value = object && object[variable];

        if(value){
            if(variable === MODIFIED){
                ret[variable] = new Date().toISOString();
            } else {
                ret[variable] = value;
            }
        }
    });

    return ret;
}

module.exports = {
    getConfig,
    makeRequest,
    mapVariables
}