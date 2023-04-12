const mongoose=require("mongoose")
let UsersSchema=new mongoose.Schema({
    email:{type:String,require:true},
    profilepic:{type:String},
    Username:{type:String,require:true},

})
let UserModel=mongoose.model("",UsersSchema)

module.exports={UserModel}