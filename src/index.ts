import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { createServer } from './graphql/setup';

async function main() {
  dotenv.config();
  const app = express();

  app.use(cors());

  const server = await createServer();
  server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  app.listen(process.env.PORT, () => {
    console.log('Listing to port 8000');
  });
}

main();
