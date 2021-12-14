import itemTypeDefs from './Item/index.mjs';
import { gql } from "apollo-server-express";

const typeDefs = gql`
  ${itemTypeDefs}
`;

export default typeDefs;
