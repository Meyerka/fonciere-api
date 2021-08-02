import express = require('express');
import { ApolloServer, gql } from 'apollo-server-express';
require('dotenv').config();
import { MongoClient } from 'mongodb';

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dtbk6.mongodb.net/fonciere?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log(err);
  client.close();
});

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
