import { gql } from '@apollo/client';

const GET_ITEM = gql`
   query getItem($id: ID!) {
      getItem(
          id: $id
        ) {
          id
          name
          price
          type
          description
        }
    }
 `;

export default GET_ITEM;