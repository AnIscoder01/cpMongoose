const mongoose=require('mongoose')

const newPerson = new mongoose.Schema({
    name:{
        type:String,
        required :true 
    },
    age :{
        type:Number
    },
    favoriteFoods:{
        type:[String]
    }
})

module.exports=Person=mongoose.model("Person",newPerson)