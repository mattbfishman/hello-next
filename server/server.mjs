import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./schema/typeDefs/index.mjs";
import resolvers from "./schema/resolvers/index.mjs";
import models from "./schema/models/index.mjs";
import dbConnection from "./db/connection/index.mjs";
import cookieParser from 'cookie-parser';
import cors from "cors"
import pkg from 'jsonwebtoken';
const { verify } = pkg;


const startApolloServer = async () => {
  await dbConnection()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

  const app = express();
  
  app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

  app.use(cookieParser());
  app.use((req, _, next) => {
    const accessToken = req.cookies["access-token"];
    try {
      const data = verify(accessToken, ACCESS_TOKEN_SECRET);
      req.username = data.username;
    } catch {}
    next();
  });

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: {
      origin: 'http://localhost:3000',
      credentials: true
    },
    context: ({ req, res }) => {
      return {
        models: {
          Item: models.generateItemModel(),
          User: models.generateUserModel(req, res)
        }
      };
    },
  });
  await server.start();

  server.applyMiddleware({ app, 
    cors: {
      origin: 'http://localhost:3000',
      credentials: true
    }, 
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
