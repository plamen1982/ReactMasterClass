import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const app = express();
// users will be recipes and blogs also added roles admin will added roles and recipes
// offer to Dimana users do be able to add posts and recipes
const schema = gql`
  type Query {
    me: User
    user(id: Int!): User
    users: [User!]
  }
  type User {
    id: ID!
    username: String!
    age: Int!
    firstname: String!
    lastname: String!
    email: String!
    company: Company
  }
  # Posts and One more for Recipes, post and recipes will have comments
  type Company {
    country: String!
    city: String!
    zip: Int!
    name: String!
    address: String!
  }
`;
// data will come from MongoDB
const users = {
  user1: { id: 1, username: 'pax' },
  user2: { id: 2, username: 'paxito' },
};

const resolvers = {
  Query: {
    me: () => ({ username: 'pax', company: { name: 'pax-group' } }),
    user: (parent, args) => {
      console.log(parent);
      console.log(args);
      return users[args.id];
    },
    users: () => {
      return Object.values(users);
    },
  },
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});
