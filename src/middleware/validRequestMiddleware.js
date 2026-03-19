import z from "zod";





export const validateRequest = (schema) => {
    
    return (req, res, next) => {
        console.log("Validate Request Middleware reached");
        const result = schema.safeParse(req.body);

        if(!result.success){
            const flattened = z.flattenError(result.error);

            console.log(flattened);
            return res.status(400).json({ fieldErrors: flattened.fieldErrors, 
                formErrors: flattened.formErrors,
                result: result
                },
                
            );
        }   

        //IMPORTANT PASS ON THE CLEANED DATA
        req.body = result.data;
        console.log("Request is valid proceeding controller")
        next();
    }
}