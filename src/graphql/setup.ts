import { credentials } from '@grpc/grpc-js';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { UserServiceClient } from '../protos/user_grpc_pb';
import { UserClass } from './user';
export interface ContextType {
  res: Express.Response;
  req: Express.Request;

  authToken?: string;
  userClient: UserServiceClient;
  // contentClient : ContentServiceClinet;
}

export async function createServer(): Promise<ApolloServer> {
  const schema = await buildSchema({
    resolvers: [UserClass],
  });

  const userClient = new UserServiceClient(
    process.env.AUTH_GRPC_SERVER ?? '',
    credentials.createInsecure()
  );
  return new ApolloServer({
    schema,
    context: ({ req, res }): ContextType => ({
      req,
      res,
      authToken: req.cookies['authorization'],
      userClient,
    }),
  });
}
