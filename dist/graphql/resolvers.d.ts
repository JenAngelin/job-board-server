export declare const resolvers: {
    Query: {
        jobs: (_parent: unknown, args: {
            filter?: {
                location?: string;
                type?: string;
            };
        }) => Promise<(import("mongoose").Document<unknown, {}, {
            id?: string | null;
            title?: string | null;
            description?: string | null;
            minSalary?: number | null;
            maxSalary?: number | null;
            location?: string | null;
            type?: string | null;
            status?: string | null;
            company?: {
                name?: string | null;
                logo?: string | null;
            } | null;
        }, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<{
            id?: string | null;
            title?: string | null;
            description?: string | null;
            minSalary?: number | null;
            maxSalary?: number | null;
            location?: string | null;
            type?: string | null;
            status?: string | null;
            company?: {
                name?: string | null;
                logo?: string | null;
            } | null;
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        })[]>;
        job: (_parent: unknown, args: {
            id: string;
        }) => Promise<(import("mongoose").Document<unknown, {}, {
            id?: string | null;
            title?: string | null;
            description?: string | null;
            minSalary?: number | null;
            maxSalary?: number | null;
            location?: string | null;
            type?: string | null;
            status?: string | null;
            company?: {
                name?: string | null;
                logo?: string | null;
            } | null;
        }, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<{
            id?: string | null;
            title?: string | null;
            description?: string | null;
            minSalary?: number | null;
            maxSalary?: number | null;
            location?: string | null;
            type?: string | null;
            status?: string | null;
            company?: {
                name?: string | null;
                logo?: string | null;
            } | null;
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }) | null>;
    };
    Mutation: {
        applyToJob: (_parent: unknown, args: {
            input: {
                jobId: string;
                name: string;
                email: string;
            };
        }, context: {
            user: unknown;
        }) => Promise<string>;
    };
};
//# sourceMappingURL=resolvers.d.ts.map