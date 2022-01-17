import { gql } from "apollo-server-express";

const userTypeDefs = gql`
    type User {
        username: String,
        password: String
    }

    input UserInput {
        username: String,
        password: String
    }

    type Mutation {
        login(user: UserInput): User
        register(user: UserInput): User
    }`;
  

export default userTypeDefs;