import {itemQueries, itemMutations} from './Item/index.js';


const resolvers = {
    Query: {
        ...itemQueries
    },
    Mutation: {
        ...itemMutations
    },
  };
  
  export default resolvers;
  