import {buildSchema} from 'graphql';

module.exports = buildSchema(`
    type Sale {
        _ID: ID!
        typeOfItem: String!
        price: Number!
        location: String!
    }

    input SaleInput {
        typeOfItem: String!
        price: Number!
        location: String!
    }

    type Query {
        sales: [Sale!]
    }    

    type Mutation {
        createSale(sale:Sale): Sale
    }

    schema {
        query: Query
        mutation: Mutation
    }
`)