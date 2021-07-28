import express = require('express');
import { ApolloServer, gql } from 'apollo-server-express';


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
