

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



router.put("/:id",async (req,res)=>{

    try{
    
    const service=await Service.findByIdAndUpdate(req.params.id,req.body,{new:true})
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
    console.log(req.query)
let limit=4
var service=await Service.find().skip(req.query.page*limit).limit(limit) .lean().exec()

if(req.query.serviceparam)
{

    if(req.query.serviceparam=="la")
    {

        service=service.sort(function (a, b) {
            return (a.city).localeCompare(b.city);
        })
    }
    if(req.query.serviceparam=="pa")
    {

        service=service.sort((a,b)=>(a.cost-b.cost))
    }
    if(req.query.serviceparam=="pd")
    {

        service=service.sort((a,b)=>(b.cost-a.cost))
    }
}




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


        router.patch("/user/:id",async (req,res)=>{

            try{
                const servic=await Service.findById(req.params.id)
                if(servic.status=="false")
                {
                    var service=await Service.findByIdAndUpdate(req.params.id,{status:"true"},{new:true})

                }
                else{
                    var service=await Service.findByIdAndUpdate(req.params.id,{status:"false"},{new:true})

                }

            
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