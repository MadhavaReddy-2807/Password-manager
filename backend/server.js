const express=require('express');
var cors = require('cors')
const app=express();
// var app = express();
app.use(cors())
const bodyparser=require('body-parser');
const port=3000;
app.use(bodyparser.json())
const {MongoClient}=require('mongodb');
require('dotenv').config()
console.log(process.env.MONGO)
//to connect to monogodb
const url="mongodb://localhost:27017/"
const client=new MongoClient(url);
//to add DataBase
const dbname="Passop"
//get all the passwords
app.get('/',async(req,res)=>{
     const db=client.db(dbname);
     const collection=db.collection("passwords");
     const find=await collection.find({}).toArray();
     res.json(find);
    // res.send("HdEllo");
})
//save a passwords
app.post('/',async(req,res)=>{
     const password=req.body;
     const db=client.db(dbname);
     const collection=db.collection("passwords");
     const find=await collection.insertOne(password)
    res.send({"Succes":"true"});
})
app.delete('/',async(req,res)=>{
     const password=req.body;
     const db=client.db(dbname);
     const collection=db.collection("passwords");
     const find=await collection.deleteOne(password);
     res.send({deleted:'yes'});
     const deleted= db.collection("deleted")
     await deleted.insertOne(password);

})
app.listen(port,()=>{

})