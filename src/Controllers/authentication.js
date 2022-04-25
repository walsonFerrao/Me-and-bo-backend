const jwttoken=require("jsonwebtoken")
const bryptjson=require("bcryptjs")
const User=require("../models/usermodel")
require('dotenv').config()

const generatetoken=function (user)
{

    return  jwttoken.sign({user}, process.env.JWT_SECRETKEY);

}



const register=async function (req,res)
{
try
{
    const email=await User.findOne({email:req.body.email}).lean().exec()
    if(email)
    {
    
        return res.status(401).send({error:"email already exists"})
    }
    
    const user=await User.create(req.body)
  
  console.log(user)
    const token=generatetoken(user)
    
    console.log(user)
    
   return res.status(201).send({token})
}
catch(err)
{
console.log(err)
return res.status(500).send(err)

}


}



const login =async(req,res)=>{


try{

    const user=await User.findOne({email:req.body.email})


    if(!user)
    {
    return res.status(401).send({error:"either email or password is not matching"})
    
    }
    console.log(req.body.password,user.password)


    if(bryptjson.compareSync(req.body.password,user.password))
    {
        const token=generatetoken(user)
    res.status(200).send({token:token,name:user.name,email:user.email,usertype:user.usertype,phonenumber:user.phonenumber,address:user.address,id:user._id})
    
    }
    else{
      return  res.status(401).send("either uername or password is wrong")
    }
}
catch(err)
{

    console.log(err)
    return res.status(500).send(err)


}





}






module.exports={register,login}