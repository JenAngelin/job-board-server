import { connectDB } from "./config/db";
import dotenv from "dotenv";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./graphql/typeDefs";
import { resolvers } from "./graphql/resolvers";

import { verifyToken } from "./utils/auth";

dotenv.config();

const server = new ApolloServer({ typeDefs, resolvers });

const startServer = async () => {
  await connectDB();
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },

    context: async ({ req }) => {
      const authHeader = req.headers.authorization || "";
      const token = authHeader.replace("Bearer ", "");
      const user = token ? verifyToken(token) : null;
      return { user };
    },
  });

  console.log(`Server ready at ${url}`);
};

startServer();
