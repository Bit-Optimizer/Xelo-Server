import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'graphql';
import { UserClass } from './user';

export async function createServer(): Promise<ApolloServer> {
  const schema = await buildSchema({
    resolvers : [UserClass],
  });


}
