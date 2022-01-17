import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./schema/typeDefs/index.mjs";
import resolvers from "./schema/resolvers/index.mjs";
import models from "./schema/models/index.mjs";
import dbConnection from "./db/connection/index.mjs";
import cors from "cors"

const startApolloServer = async () => {

  await dbConnection()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

  const app = express();
  app.use(cors())

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      return {
        models: {
          Item: models.generateItemModel(),
          User: models.generateUserModel()
        },
      };
    },
  });
  await server.start();

  server.applyMiddleware({ app });

  app.use((req, res) => {
    res.status(200);
    res.send("Welcome Fish CMS Server");
    res.end();
  });

  await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
  return { server, app };
};

startApolloServer();
