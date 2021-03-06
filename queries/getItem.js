import { gql } from '@apollo/client';

const GET_ITEM = gql`
   query getItem($id: ID!) {
      getItem(
          _id: $id
        ) {
          _id
          name
          price
          type
          description
          created
          modified
          imgSrc
        }
    }
 `;

export default GET_ITEM;