import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const app = express();
const schema = gql`
  type Query {
    me: User,
    user(id: Int!): User,
    users:[User!]
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
const users = {
  1: { id: 1, username: 'pax' }, 
  2: { id: 2, username: 'paxito' }
}


const resolvers = {
  Query: {
    me: () => ({ username: 'pax', company: { name: 'pax-group' } }),
    user: (parent, args) => { 
      console.log();
      return users[args.id];
    },
    users: () => {
      return Object.values(users)}
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