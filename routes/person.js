const express=require("express")
const router=express.Router()
const Person=require("../model/Person")


// add new Person
router.post('/adduser',async(req,res)=>{   
    const user=req.body
    
try {
    const person=new Person(user)
    await person.save()
    res.status(200).send({"added with sucess" : person})

} catch (error) {
    res.status(500).send('server error')
}
})

router.get('/getuser',async(req,res)=>{
    try {
        const users= await Person.find()
        res.status(200).send({"users find " : users})

    } catch (error) {
        console.log(error)
        
    }
})
router.delete('/deleteuser/:id',async(req,res)=>{
    const {id}=req.params
    try {
        const users= await Person.findByIdAndDelete(id)
        res.status(200).send({"user deleted": users})
    } catch (error) {
        console.log(error)
        
    }

})

router.put('/edituser/:id',async(req,res)=>{
    const {id}=req.params
    const {name,age,favoriteFoods}=req.body
    try {
        const users= await Person.findByIdAndUpdate(id,{name,age,favoriteFoods})
        res.status(200).send({"user upadate": users})
    } catch (error) {
        console.log(error)
        
    }

})



module.exports=router