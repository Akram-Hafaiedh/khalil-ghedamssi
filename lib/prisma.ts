// lib/prisma.ts

import { PrismaClient } from '../prisma/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const connectionString = process.env.KHALIL_DATABASE_URL;

if (!connectionString) {
    throw new Error("KHALIL_DATABASE_URL environment variable is not set.");
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prismaClient = new PrismaClient({ adapter });

const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined
};
const prisma = globalForPrisma.prisma ?? prismaClient;
export default prisma;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;