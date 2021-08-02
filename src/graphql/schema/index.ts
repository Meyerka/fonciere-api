import {buildSchema} from 'graphql';

module.exports = buildSchema(`
    type Sale {
        _ID: ID!
        typeOfItem: string
        price: 
    }
`)