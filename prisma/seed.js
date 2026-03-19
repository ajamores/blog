import { prisma } from "../src/config/db.js";
import "dotenv/config";
import { hashPassword } from "../src/utils/hashPassword.js";
import { generateSlug } from "../src/utils/generateSlug.js";



// const categories = [
//     {
//         name: "life"
//     },
//     {
//         name: "technology"
//     },
//     {
//         name: "goals"
//     },
//     {
//         name: "jobs"
//     }
// ] 

const posts = [
  {
    "title": "How I Balanced Work and Life in 2025",
    "excerpt": "A personal reflection on setting boundaries, finding time for myself, and staying sane in a busy world.",
    "status": "PUBLISHED",
    "categories": ["life", "goals"],
    "content": {
      "time": 1710000000000,
      "version": "2.28.0",
      "blocks": [
        { "type": "header", "data": { "text": "Finding Balance", "level": 2 } },
        { "type": "paragraph", "data": { "text": "It took me a long time to realize that productivity isn't about doing more, it's about doing what matters." } },
        { "type": "paragraph", "data": { "text": "I started blocking off mornings for deep work and leaving evenings <i>completely</i> screen-free." } }
      ]
    }
  },
  {
    "title": "The Tools I Use as a Developer in 2025",
    "excerpt": "A breakdown of the tech stack, apps, and workflows that keep me productive day to day.",
    "status": "PUBLISHED",
    "categories": ["technology", "jobs"],
    "content": {
      "time": 1710000000001,
      "version": "2.28.0",
      "blocks": [
        { "type": "header", "data": { "text": "My Current Stack", "level": 2 } },
        { "type": "paragraph", "data": { "text": "After years of trying different setups I've landed on a combination of tools that genuinely work for me." } },
        { "type": "image", "data": { "file": { "url": "https://images.unsplash.com/photo-1587620962725-abab7fe55159" }, "caption": "A clean desk setup goes a long way.", "withBorder": false, "withBackground": false, "stretched": false } },
        { "type": "paragraph", "data": { "text": "VS Code, Postgres, and Next.js form the core. <i>Everything else is just noise.</i>" } }
      ]
    }
  },
  {
    "title": "Setting Career Goals That Actually Stick",
    "excerpt": "Most career goals fail by February. Here is how to set ones that hold up through the whole year.",
    "status": "DRAFT",
    "categories": ["goals", "jobs", "life"],
    "content": {
      "time": 1710000000002,
      "version": "2.28.0",
      "blocks": [
        { "type": "header", "data": { "text": "Why Most Goals Fail", "level": 2 } },
        { "type": "paragraph", "data": { "text": "We set goals based on <i>who we want to be</i>, not who we actually are right now. That gap is where motivation dies." } },
        { "type": "paragraph", "data": { "text": "Start smaller than you think you need to. Consistency over intensity every time." } }
      ]
    }
  }
]







const main = async () => {
    try {
        console.log("Seeding admin and categories...")

        const hashedPassword = await hashPassword(process.env.ADMIN_PASS_SEED)

        const admin = await prisma.admin.create({
            data: {
                username: process.env.ADMIN_USER_SEED,
                password: hashedPassword
            }
        })

        console.log(`User ${admin.username} has been added.`);


        for(const post of posts){
            await prisma.post.create({
                data: {
                    slug: generateSlug(post.title),
                    title: post.title,
                    excerpt: post.excerpt,
                    content: post.content,
                    status: post.status,
                    adminId: admin.id,
                    categories: {
                        connectOrCreate: 
                            post.categories.map( (name) => ({
                                where: { name },
                                create: { name }
                            }))
                    }
                }
            })
        }

        console.log("Seed completed...")

    } catch (error) {
        console.log(error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();