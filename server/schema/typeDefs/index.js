import itemTypeDefs from './Item/index.js';
import { gql } from "apollo-server-express";

const typeDefs = gql`
  ${itemTypeDefs}
`;

export default typeDefs;
