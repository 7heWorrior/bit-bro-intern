const express = require('express')
const router = new express.Router()
const User = require('../model/user')




router.post('/api/users',async(req,res)=>{
    const user = new User(req.body)
    try{
        await user.save()
        res.send()
    } catch{
        res.status(500).send()
    }
})
router.get('/api/users',async (req,res)=>{
    try{
        const user = await User.find({})
        res.send(user)
    } catch{
        res.status(500).send()
    }
})
router.get('/api/users/:id', async(req,res)=>{
    try{
        const user = await User.findOne({id:req.params.id})
        if(!user){
            res.status(404).send()
        }
        res.send(user)
    } catch{
        res.status(500).send()
    }
})
router.put('/api/users/:id', async(req,res)=>{
    const user = await User.findOneAndUpdate({id:req.params.id},req.body,{new: true})
    if(!user){
        const temp = new User(req.body)
        await temp.save()
        res.send(temp)
        return
    }
    res.send(user)
})
router.delete('/api/users/:id', async(req,res)=>{
    try{
        const user = await User.findOneAndDelete({id:req.params.id})
        if(!user){
            res.status(404).send()
        }
        res.send(req.user)
    } catch(e){
        res.status(500).send()
    }
})


module.exports = router