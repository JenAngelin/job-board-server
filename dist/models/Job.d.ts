import mongoose from "mongoose";
export declare const Job: mongoose.Model<{
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
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
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
}, mongoose.DefaultSchemaOptions> & Omit<{
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
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
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
}, mongoose.Document<unknown, {}, {
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
}, mongoose.DefaultSchemaOptions> & Omit<{
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
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
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
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
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
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=Job.d.ts.map