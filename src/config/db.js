import "dotenv/config";
import { PrismaClient } from '../generated/prisma/client.ts'
import { PrismaPg } from '@prisma/adapter-pg';

//Configure prisma adapter with connection string from env
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL
});

export const prisma = new PrismaClient({ adapter }); 

/**
 * Connect to database via configured prisma adapter
 */
const connectDB = async () => {
    try {
        await prisma.$connect();
        console.log("DB Connected via PRISMA");
    } catch (error) {
        console.error("Database connection error: " + error);
        process.exit(1);
    }
};

/**
 * Disconnect from database
 */
const disconnectDB = async () => {
    await prisma.$disconnect();
};

export { connectDB, disconnectDB };