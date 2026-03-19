import { prisma } from "../config/db.js"


const createCategory = async (req, res, next) => {

    try {
        
        let { name } = req.body;

        //all categories are going to be in lowercase
        name = name.toLowerCase();

        const category = await prisma.category.findUnique({
            where: {
                name: name
            }
        })

        if(category){
            console.log("category Controller: createCategory() error");
            res.status(409).json({
                status: "unsuccessful",
                error: "Category already exists"
            })
        }

        //Make if !category 
        await prisma.category.create({
            data: {
                name: name
            }
        })

        res.status(200).json({
            status: "success",
            message: "Category: " + name  + " created"
        })
        
    } catch (error) {
        console.log("Category Controller: createCategory()");
        next(error);
    }
}

const deleteCategory = async (req, res, next) => {

    try {
        const { slug } = req.params;
        const name = slug;

        //Check to see if category exists or throw error
        const category = await prisma.category.findFirstOrThrow({
            where: {
                name: name
            }
        })


        //Delete if found
        await prisma.category.delete({
            where: {
                name: name
            }
        })

        res.status(200).json({
            status: "success",
            message: slug + " has been deleted"
        })
    } catch (error) {
        console.log(error.message);
        next(error);
    }
}

export { createCategory, deleteCategory };