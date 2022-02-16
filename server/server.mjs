import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./schema/typeDefs/index.mjs";
import resolvers from "./schema/resolvers/index.mjs";
import models from "./schema/models/index.mjs";
import dbConnection from "./db/connection/index.mjs";
import cookieParser from 'cookie-parser';
import isAuth from './middleware/isAuth.mjs';
import cors from "cors"
const corsConfig = {credentials: true, origin: 'http://localhost:3000'};


const startApolloServer = async () => {
  await dbConnection()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

  const app = express();
  app.use(cookieParser());

  
  app.use(cors(corsConfig));

  app.use(isAuth);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: corsConfig,
    context: ({ req, res }) => {
      return {
        models: {
          Item: models.generateItemModel(req),
          User: models.generateUserModel(req, res)
        }
      };
    },
  });
  await server.start();

  server.applyMiddleware({ app, 
    cors: corsConfig, 
  });

  app.use((req, res) => {
    res.status(200);
    res.send("Welcome Fish CMS Server");
    res.end();
  });

  await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
  return { server, app };
};

startApolloServer();
