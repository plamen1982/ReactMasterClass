import { ForbiddenError } from 'apollo-server';
import { skip } from 'graphql-resolvers';

export default {
  // Check for jwt if exists
  isAuthenticated: (parent, args, { me }) =>
    me ? skip : new ForbiddenError('Not authenticated as user.'),
};
