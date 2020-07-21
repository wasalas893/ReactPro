const express=require('express');
const router=express.Router();
const { check,validationResult}=require('express-validator/check');
const User=require('../../models/User');
//@route GET api/users
//@desc  Test Route
//@access Public

router.post('/',[
    check('name','Name is required').not().isEmpty(),
    check('email','Please include a valid email').isEmail(),
    check('password','Please enter a password with 6 or more characters').isLength({min:6})
],async(req,res)=>{
   
  const errors=validationResult(req);
  if(!errors.isEmpty()){
      return res.status(400).json({errors:errors.array() });
  }

  const{ name,email,password}=req.body;
   

try{


    res.send('User Route');

}catch(err){
   console.error(err.message);
   res.status(500).send('Server error');
}

});

module.exports=router;