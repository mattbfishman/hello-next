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

    type UserInfo {
        username: String
    }

    type Mutation {
        login(user: UserInput): UserInfo
        register(user: UserInput): Boolean
    }`;
  

export default userTypeDefs;