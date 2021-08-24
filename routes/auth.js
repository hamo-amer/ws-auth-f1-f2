const express=require('express')
const { signUp, signIn } = require('../controllers/auth')
const { isAuth } = require('../middlewares/isAuth')
const { registerRules, Validator, loginRules } = require('../middlewares/Validator')
const router=express.Router()

// desc signup
// method post 
// req.body
router.post('/signup',registerRules,Validator,signUp)
/// desc signin
// method post
// req.body

router.post('/signin',loginRules,Validator,signIn)


// desc auth user
// method get
// req.headers
router.get('/current',isAuth,(req,res)=>res.send({user:req.user}))



module.exports=router