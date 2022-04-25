

const { Router } = require('express')
const Service=require("../models/servicemodel")
const router=Router()

router.post("",async (req,res)=>{

try{

const service=await Service.create(req.body)
res.status(201).send(service)

}
   catch(err)
   {
       console.log(err)
       return res.status(500).send(err)
   }





})



module.exports=router