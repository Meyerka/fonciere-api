import express = require('express');
import { ApolloServer, gql } from 'apollo-server-express';
import mongoose = require('mongoose');
require('dotenv').config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env	.DB_PASS}
@karl.s0ktz.mongodb.net/delegation?retryWrites=true&w=majority`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('connection to DB established'));

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use(express.json())
server.applyMiddleware({ app });




const port = process.env.PORT || '5000'
app.listen(port, () => console.log(`server started on port ${port}`));
