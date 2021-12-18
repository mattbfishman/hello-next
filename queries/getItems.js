import { gql } from '@apollo/client';

const GET_ITEMS = gql`
  query getItems {
    getItems{
      _id
      name
      description
      date
    }
  }
`;

export default GET_ITEMS;