import { gql } from '@apollo/client';

const GET_ITEMS = gql`
  query getItems {
    getItems{
      _id
      name
      description
      modified
      created
    }
  }
`;

export default GET_ITEMS;