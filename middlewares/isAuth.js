const jwt= require("jsonwebtoken")
const User = require("../models/User")


exports.isAuth=async(req,res,next)=>{
    const token=req.headers["authorization"]
    try {
        if(!token){
            return res.status(400).send({errors:[{msg:"you are not authorized"}]})
        }
        const decoded= jwt.verify(token,process.env.secretKey)
        const user=await User.findById(decoded.id)
        if(!user){
            return res.status(400).send({errors:[{msg:"you are not authorized"}]})
        }
        req.user=user
        next()
    } catch (error) {
        res.status(500).send({errors:[{msg:"you are not authorized"}]})
    }
}