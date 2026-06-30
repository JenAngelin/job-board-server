import { Job } from "../models/Job";
import { Application } from "../models/Application";

export const resolvers = {
  Query: {
    jobs: async (
      _parent: unknown,
      args: { filter?: { location?: string; type?: string } }
    ) => {
      const query: { location?: string; type?: string } = {};
      if (args.filter?.location) {
        query.location = args.filter.location;
      }
      if (args.filter?.type) {
        query.type = args.filter.type;
      }
      return await Job.find(query);
    },

    job: async (_parent: unknown, args: { id: string }) => {
      return await Job.findOne({ id: args.id });
    },
  },

  Mutation: {
    applyToJob: async (
      _parent: unknown,
      args: { input: { jobId: string; name: string; email: string } },
      context: { user: unknown }
    ) => {
      if (!context.user) {
        throw new Error("Unauthorized");
      }
      await Application.create({
        jobId: args.input.jobId,
        name: args.input.name,
        email: args.input.email,
      });
      return "Application Submitted Successfully!";
    },
  },
};
