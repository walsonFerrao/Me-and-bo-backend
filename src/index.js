const express=require("express")
const app=express()
const mongoose=require("mongoose")


const {register,login}=require("./Controllers/authentication")


const connect=function(){

mongoose.connect("mongodb+srv://walson:123@cluster0.2g6a8.mongodb.net/test")


}

app.use(express.json())

app.post("/register",register)
app.post("/login",login)





app.listen(1080,async (req,res)=>{

try{

await connect("mongodb+srv://walson:123@cluster0.2g6a8.mongodb.net/test")
console.log("you are lsitening to 1080")

}
catch(err)
{
    console.log(err)
}



})