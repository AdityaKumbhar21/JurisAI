import joi from "joi";

const Schemas = {
    signup: joi.object( {
        fullname: joi.string().min(3).required(),
        email: joi.string().email().required(),
        password: joi.string().min(6).required()
    }),

    login: joi.object({
        email: joi.string().email().required(),
        password: joi.string().required()
    }),
}

export const validateUser = (req, res, next)=>{
    let schema;

    if(req.method === "POST" && req.path === '/signup'){
        schema = Schemas.signup;
    }
    else if(req.method === "POST" && req.path === '/login'){
        schema = Schemas.login;
    }
    else{
        return res.status(404).json({"message": "Page not found"});
    }

    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400).json({"message": error.details[0].message});
    }
    next();
}