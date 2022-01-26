import { gql } from "apollo-server-express";

const userTypeDefs = gql`
    type User {
        username: String,
        password: String,
        roles: [Roles],
        permissions: [Roles]
    }

    input UserInput {
        username: String,
        password: String
    }

    enum Roles {
        admin
    }

    enum Permissions {
        read_any_account,
        read_own_account
    }

    type UserInfo {
        username: String,
        roles: [Roles],
        permissions: [Permissions]
    }

    type Mutation {
        login(user: UserInput): UserInfo
        register(user: UserInput): Boolean
    }`;

  

export default userTypeDefs;