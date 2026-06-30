"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./config/db");
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const typeDefs_1 = require("./graphql/typeDefs");
const resolvers_1 = require("./graphql/resolvers");
const auth_1 = require("./utils/auth");
dotenv_1.default.config();
const server = new server_1.ApolloServer({ typeDefs: typeDefs_1.typeDefs, resolvers: resolvers_1.resolvers });
const startServer = async () => {
    await (0, db_1.connectDB)();
    const { url } = await (0, standalone_1.startStandaloneServer)(server, {
        listen: { port: 4000 },
        context: async ({ req }) => {
            const authHeader = req.headers.authorization || "";
            const token = authHeader.replace("Bearer ", "");
            const user = token ? (0, auth_1.verifyToken)(token) : null;
            return { user };
        },
    });
    console.log(`Server ready at ${url}`);
};
startServer();
//# sourceMappingURL=index.js.map