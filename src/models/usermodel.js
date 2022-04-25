const mongoose=require("mongoose")

const bryptjson=require("bcryptjs")

const userschema=new mongoose.Schema({

username:{type:String,required:true},
email:{type:String,required:true,unique:true},
password:{type:String,required:true},
usertype:{type:String,required:true,default:"customer"},
phonenumber:{type:String,required:true,unique:true},
address:{type:String,required:false}

})

userschema.pre("save",async function(next)
{

if(this.password)
{
    // console.log("yes")
const salt=bryptjson.genSaltSync(5)
this.password=await bryptjson.hashSync(this.password,salt)
next()
}


})




module.exports=mongoose.model("user",userschema)