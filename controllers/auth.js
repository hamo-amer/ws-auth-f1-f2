const User=require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



exports.signUp=async(req,res)=>{
    const {name,email,password}=req.body
try {
    const findUser= await User.findOne({email})
    if(findUser){
        return res.status(400).send({errors:[{msg:"email is already exist"}]})
    }
    const user=new User({
        name,email,password
    })
   
    const salt=10
    const hash= await  bcrypt.hash(password,salt)
    
    user.password=hash
    
    await user.save()

const payload={
    id:user._id
}
const token= jwt.sign(payload,process.env.secretKey,{ expiresIn: '24h' })


    res.status(200).send({msg:"user register with success",user,token})
} catch (error) {
    res.status(500).send({errors:[{msg:"impossible to register"}]})
}

}
exports.signIn=async(req,res)=>{
    const {email,password}=req.body
    try {
        const user=await User.findOne({email})
        if(!user){
            return res.status(400).send({errors:[{msg:"bad credential"}]})
        }
        const match=await bcrypt.compare(password,user.password)
        if(!match){
            return res.status(400).send({errors:[{msg:"bad credential"}]})
        }
        const payload={
            id:user._id
        }
        const token= jwt.sign(payload,process.env.secretKey,{expiresIn:'24h'})
        res.status(200).send({msg:"user login with success",user,token})
    } catch (error) {
        res.status(500).send({errors:[{msg:"impossible to login"}]})
    }
}