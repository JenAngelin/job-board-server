"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.typeDefs = (0, graphql_tag_1.gql) `
  type Company {
    name: String!
    logo: String!
  }
  type Job {
    id: ID!
    title: String!
    description: String!
    minSalary: Int!
    maxSalary: Int!
    location: String!
    type: String!
    status: String!
    company: Company!
  }
  input JobFilter {
    location: String
    type: String
  }
  input ApplyInput {
    jobId: ID!
    name: String!
    email: String!
  }
  type Query {
    jobs(filter: JobFilter): [Job!]!
    job(id: ID!): Job
  }
  type Mutation {
    applyToJob(input: ApplyInput!): String!
  }
`;
//# sourceMappingURL=typeDefs.js.map