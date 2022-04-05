import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'graphql';
import { UserClass } from './user';

export interface ContextType {
  res: Express.Response;
  req: Express.Request;

  authToken?: string;
  // userClient : UserServiceClinet;
  // contentClient : ContentServiceClinet;
}

export async function createServer(): Promise<ApolloServer> {
  const schema = await buildSchema({
    resolvers: [UserClass, ContentClass],
  });
}
