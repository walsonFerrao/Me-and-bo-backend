const mongoose=require("mongoose")

const serviceschema=new mongoose.Schema({

firmname:{type:String,required:true},
about:{type:String,required:true},
summary:{type:String,required:false},
services:[{type:String,required:true}],
cost:{type:String,required:true},
capacity:{type:String,required:true},
city:{type:String,required:true},
address:{type:String,required:true},
status:{type:String,default:false},

phonenumber:{type:String,required:true},
restrictions:[{initialsize:{type:String,required:true},finalsize:{type:String,required:true},pet:{type:String,required:true}}],
one:{type:String,required:false},
two:{type:String,required:false},
three:{type:String,required:false},
four:{type:String,required:false},
five:{type:String,required:false},
six:{type:String,required:false},
seven:{type:String,required:false},
eight:{type:String,required:false},
user:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
url:{type:String,required:false},


},{
    timestamps:true,
    versionKey:false
})

module.exports=mongoose.model("service",serviceschema)