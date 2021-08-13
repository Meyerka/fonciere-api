import express = require('express');
import { ApolloServer, gql } from 'apollo-server-express';
import mongoose = require('mongoose');
import { makeExecutableSchema } from 'graphql-tools';
import schema from './graphql/schema';


require('dotenv').config();


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dtbk6.mongodb.net/fonciere?retryWrites=true&w=majority`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('connection to DB established'));


const server = new ApolloServer({schema});

const app = express();
app.use(express.json())
server.applyMiddleware({ app });




const port = process.env.PORT || '5000'
app.listen(port, () => console.log(`server started on port ${port}`));
