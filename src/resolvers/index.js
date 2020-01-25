import { extractFragmentReplacements } from 'prisma-binding';

import { Mutation } from './Mutation';
import { PublicUser } from './PublicUser';
import { Query } from './Query';
import { User } from './User';

export const resolvers = {
  Query,
  User,
  PublicUser,
  Mutation
};

export const fragmentReplacements = extractFragmentReplacements(
  resolvers
);
