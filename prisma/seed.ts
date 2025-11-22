// prisma/seed.ts
import { Pool } from 'pg';
import { PrismaClient } from "./generated/prisma/client"
import { PrismaPg } from '@prisma/adapter-pg';

const connectionString = process.env.KHALIL_DATABASE_URL;

if (!connectionString) {
    throw new Error("Missing KHALIL_DATABASE_URL for seeding.");
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter })

async function main() {
    console.log('Seeding database...')


    const testUser = await prisma.user.upsert({
        where: { email: 'test@khalil.com' },
        update: {},
        create: {
            email: 'test@khalil.com',
            name: 'Test User',
            emailVerified: new Date(),
        },
    })

    console.log('Database seeded:', testUser)
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
