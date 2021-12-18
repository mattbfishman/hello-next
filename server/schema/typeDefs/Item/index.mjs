import { gql } from "apollo-server-express";

const itemTypeDefs = gql`
    type Item {
        name: String,
        price: Int,
        type: String,
        imgSrc: String,
        description: String,
        _id: String,
        date: Date
    }

    input ItemInput {
        name: String,
        price: Int,
        type: String,
        imgSrc: String,
        description: String,
        _id: String,
        date: Date
    }

    input CreateItemInput {
        _id: String,
        name: String,
        price: Int,
        type: String,
        description: String,
    }

    type Query {
        getItems: [Item],
        getItem(_id: ID!): Item
    }

    type Mutation {
        addItem(item: CreateItemInput): Item
        modifyItem(_id: ID!, query: ItemInput): Item
        deleteItem(_id: ID!): Item
    }`;
  

export default itemTypeDefs;