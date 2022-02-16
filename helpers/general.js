import {PAGE_CONFIGS, GRAPHQL_ENDPOINT} from '../constants/general';
import {MODIFIED} from './date';
import {QUERIES} from '../constants/api';
import { GraphQLClient } from "graphql-request";
import { forEach } from 'lodash';
var graphQLClient;

function getConfig(type = '', pageName) {
    var config;
    if(pageName){
        config = PAGE_CONFIGS && PAGE_CONFIGS[pageName];    
    }

    return config && config[type] || PAGE_CONFIGS && PAGE_CONFIGS[type] || {};
}

async function makeRequest(name = '', variables = {}, tokens = {}){
    var queryName = QUERIES[name],
        {refresh, access} = tokens, 
        requestHeaders = {};

    if(!graphQLClient){
        graphQLClient = new GraphQLClient(GRAPHQL_ENDPOINT, {
            credentials: 'include',
            mode: 'cors',
        });
    }

    if(refresh){
        requestHeaders.Refresh = `Bearer ${refresh}`;
    }

    // if(access){
    //     requestHeaders.Authorization = `Bearer ${access}`;
    // }

    if(queryName) {
        return await graphQLClient.request(queryName, variables, requestHeaders); 
    } 

    return null;
}

function mapVariables(variables = [], object = {}){
    var ret = {};

    forEach(variables, function(variable){
        let value = object && object[variable];

        if(variable === MODIFIED){
            ret[variable] = new Date().toISOString();
        } else if(value){
            ret[variable] = value;
        }
    });

    return ret;
}

function generateID() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

module.exports = {
    getConfig,
    makeRequest,
    mapVariables,
    generateID
}