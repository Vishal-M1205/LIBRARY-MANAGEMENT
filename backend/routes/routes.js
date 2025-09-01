import express, { Router } from 'express';
import {Book }from '../models/bookModel.js';
const router = express.Router()
const loginRoute = express.Router();
router.post('/',async (req,res)=>{
    try {
        if(!req.body.title||!req.body.author||!req.body.publishYear || !req.body.desc){
            res.status(400).send({message:"all fields are required"})
        };
        const newBook ={
            title :req.body.title,
            author:req.body.author,
            publishYear:req.body.publishYear,
            desc:req.body.desc
        };
        const book = await Book.create(newBook);
        res.send(book);
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Error in sending file"})
    }
})
router.get('/',async (req,res)=>{
    try {
       
        const data = await Book.find();
        res.json(data).status(200)
    } catch (error) {
console.log(error);
res.status(500).send({
    message:"Error fetching data"
})
        
    }
})
router.get('/:id',async (req,res)=>{
    try {
        const id = req.params.id;
        const data = await Book.findById(id);
        res.json(data).status(200);
        
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Error fetching data"})
    }
})
router.put('/:id',async (req,res)=>{
    try {
        const id = req.params.id;
        const result = await Book.findByIdAndUpdate(id,req.body);
        if(!result){
            res.status(400).send({message:"must pass a value"});
        }
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error!")
    }
})
router.delete('/:id',async (req,res)=>{
    try {
        const id = req.params.id;
       const result = await Book.findByIdAndDelete(id);
       if(!result){
        return res.status(400).send({msg:"error"});
       }
       res.status(200).send(result);
    } catch (error) {
        
    }
})

export default router;