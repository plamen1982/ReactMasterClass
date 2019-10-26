import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const app = express();
const schema = gql`
  type Query {
    me: User,
  }

  type User {
    username: String!,
    age: Int!,
    firstname: String!,
    lastname: String!,
    email: String!,
    company: Company
  }

  type Company {
    country: String!,
    city: String!,
    zip: Int!,
    name: String!,
    address: String!, 
  }
`;
const resolvers = {
  Query: {
    me: () => ({ username: 'pax', company: { name: 'pax-group' } })
  }
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});