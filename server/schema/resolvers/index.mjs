import dateScalar from '../scalars/date.mjs';
import {itemQueries, itemMutations} from './Item/index.mjs';
import { userMutations } from './User/index.mjs';


const resolvers = {
    Query: {
        ...itemQueries
    },
    Mutation: {
        ...itemMutations,
        ...userMutations
    },
    Date: dateScalar
  };
  
  export default resolvers;
  