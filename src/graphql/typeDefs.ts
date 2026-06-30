import { gql } from "graphql-tag";

export const typeDefs = gql`
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
