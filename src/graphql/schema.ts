import 'graphql-import-node';
const typeDefs = require('./schema.graphql');
import { makeExecutableSchema } from 'graphql-tools';
const resolvers = require('./resolvers');
import { GraphQLSchema } from 'graphql';
const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
export default schema;
