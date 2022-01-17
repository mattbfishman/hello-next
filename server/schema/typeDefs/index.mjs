import itemTypeDefs from './Item/index.mjs';
import dateTypeDefs from './Date/index.mjs';
import userTypeDefs from './User/index.mjs';
import { gql } from "apollo-server-express";

const typeDefs = gql`
  ${itemTypeDefs}
  ${dateTypeDefs}
  ${userTypeDefs}
`;

export default typeDefs;
