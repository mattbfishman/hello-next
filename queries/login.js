import { gql } from '@apollo/client';

const LOGIN = gql`
    mutation Login(
        $username: String!,
        $password: String!
    ) {
        login(
            user:{
              username: $username,
              password: $password
            }
        ){
            username
        }
    }
`;

export default LOGIN;