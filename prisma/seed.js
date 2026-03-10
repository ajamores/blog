import { prisma } from "../src/config/db.js";
import "dotenv/config";
import { hashPassword } from "../src/utils/hashPassword.js";



const categories = [
    {
        name: "life"
    },
    {
        name: "technology"
    },
    {
        name: "goals"
    },
    {
        name: "jobs"
    }
] 



const main = async () => {
    try {
        console.log("Seeding admin and categories...")

        const hashedPassword = await hashPassword(process.env.BLOG_PASS)

        const admin = 
        {
            username: process.env.BLOG_USER,
            password: hashedPassword
        }

        
        await prisma.admin.create({
            data: admin
        })

        console.log(`User ${admin.username} has been added.`);

        for(const category of categories){
            await prisma.category.create({
                data: category
            })
            console.log(`Category: ${category.name} has been added.`)
        }
    } catch (error) {
        console.log(error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();