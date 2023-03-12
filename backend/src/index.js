const express = require("express");
const mongoose = require("mongoose");
const User = require("../src/models/UserModel");
const {connectDatabase} = require("./connection/mongooseConnection")
const app = express();
const PORT = 8080;

connectDatabase();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.get("/users",async (req,res)=>{
  try{
      const users = await User.find({});
      res.status(201).send(users);
  }
  catch (e){
      res.status(500).send({
        "Error":e.message,
      });
  }
  
})


app.post("/register",async (req,res)=>{
  //some information provided by request
  const user = req.body;
  const newUser = new User(user);
  try{
  await newUser.save();
  res.status(201).json(newUser);
  }
  catch(error){
    res.status(500).json(
      {
        "Error":error.message
      }
    );
  }
  
})


app.post("/login",async (req,res)=>{
  res.send("you have to log in");
})

app.get("/products",async(req,res)=>{
  const products = req.body;
  const newProduct = new Product(products);
  try{
    await newProduct.save();
    res.status(201).json(newProduct);
  }
  catch(error){
    res.status.json(
      {
        "Products error": error.message
      }
    );
  }
})

app.get("/product/{id}",async(req,res)=>{
  res.send("This is User product id");
})

app.delete("/product",async(req,res)=>{
  res.send("This is User product");
})

app.post("/purchase",async(req,res)=>{
res.send("This is the item you purchases.");
})



app.listen(PORT, () => {
  console.log(`Server running on ${PORT}!`);
});