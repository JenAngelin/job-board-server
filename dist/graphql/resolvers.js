"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const Job_1 = require("../models/Job");
const Application_1 = require("../models/Application");
exports.resolvers = {
    Query: {
        jobs: async (_parent, args) => {
            const query = {};
            if (args.filter?.location) {
                query.location = args.filter.location;
            }
            if (args.filter?.type) {
                query.type = args.filter.type;
            }
            return await Job_1.Job.find(query);
        },
        job: async (_parent, args) => {
            return await Job_1.Job.findOne({ id: args.id });
        },
    },
    Mutation: {
        applyToJob: async (_parent, args, context) => {
            if (!context.user) {
                throw new Error("Unauthorized");
            }
            await Application_1.Application.create({
                jobId: args.input.jobId,
                name: args.input.name,
                email: args.input.email,
            });
            return "Application Submitted Successfully!";
        },
    },
};
//# sourceMappingURL=resolvers.js.map