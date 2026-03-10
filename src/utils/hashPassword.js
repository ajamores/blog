
import brcypt from "bcryptjs";


export const hashPassword = async (password) => {
    
    //salt password
    const salt = await brcypt.genSalt(10);

    //hash password
    return await brcypt.hash(password, salt);

}


