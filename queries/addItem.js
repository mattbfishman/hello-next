import { gql } from '@apollo/client';

const ADD_ITEM = gql`
    mutation AddItem(
        $_id: String!
        $name: String,
        $description: String
        $modified: Date
    ) {
        addItem(
            item:{
            name: $name,
            description: $description
            _id: $_id
            created: $modified
            modified: $modified
            }
        ){
            _id
            name
            price
            type
            description
            created
            modified
        }
    }
`;

export default ADD_ITEM;