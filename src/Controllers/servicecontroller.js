

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

router.get("",async (req,res)=>{

try{

const service=await Service.find().lean().exec()

res.status(201).send(service)



}
catch(err)
{

console.log(err)
res.status(500).send(err)


}


})


router.get("/:id",async (req,res)=>{

    try{
    
    const service=await Service.findById(req.params.id).lean().exec()
    
    res.status(201).send(service)
    
    
    
    }
    catch(err)
    {
    
    console.log(err)
    res.status(500).send(err)
    
    
    }
    
    
    })

    router.get("/user/:id",async (req,res)=>{

        try{
        
        const service=await Service.find({user:req.params.id}).lean().exec()
        
        res.status(201).send(service)
        
        
        
        }
        catch(err)
        {
        
        console.log(err)
        res.status(500).send(err)
        
        
        }
        
        
        })


        router.delete("/user/:id",async (req,res)=>{

            try{
            
            const service=await Service.findByIdAndDelete(req.params.id)
            
            res.status(201).send(service)
            
            
            
            }
            catch(err)
            {
            
            console.log(err)
            res.status(500).send(err)
            
            
            }
            
            
            })
    



module.exports=router