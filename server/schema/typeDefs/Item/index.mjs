import { gql } from "apollo-server-express";

const itemTypeDefs = gql`
    type Item {
        name: String,
        price: Int,
        type: String,
        imgSrc: String,
        description: String,
        id: String,
        date: String
    }

    input ItemInput {
        id: String
    }

    input CreateItemInput {
        id: String,
        name: String,
        price: Int,
        type: String,
        description: String,
    }

    type Query {
        getItems: [Item],
        getItem(id: ID!): Item
    }

    type Mutation {
        addItem(item: CreateItemInput): Item
        modifyItem(id: ID!, query: ItemInput): Item
        deleteItem(id: ID!): Item
    }`;
  

export default itemTypeDefs;