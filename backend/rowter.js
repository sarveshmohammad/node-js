const express = require('express');
const app = express();
const db = require('./config');

app.use(express.json());

app.get('/',async(req,res)=>{
    let data = await db();
    let result = await data.find({}).toArray();
    res.send(result)
});

app.post('/',async(req,res)=>{
    let data = await db();
    let result = await data.insertOne(req.body);
    res.send(result);
});

app.put('/:id',async(req,res)=>{
    let data = await db();
    let result = await data.updateOne(req.params,{$set:req.body});
    res.send(result)
})
app.delete('/:id',async(req,res)=>{
    let data = await db();
    let result = await data.deleteOne(req.body)
    res.send(result);
})
app.listen(5000);