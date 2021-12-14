import {itemQueries, itemMutations} from './Item/index.mjs';


const resolvers = {
    Query: {
        ...itemQueries
    },
    Mutation: {
        ...itemMutations
    },
  };
  
  export default resolvers;
  