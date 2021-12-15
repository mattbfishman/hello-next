import dateScalar from '../scalars/date.mjs';
import {itemQueries, itemMutations} from './Item/index.mjs';


const resolvers = {
    Query: {
        ...itemQueries
    },
    Mutation: {
        ...itemMutations
    },
    Date: dateScalar
  };
  
  export default resolvers;
  