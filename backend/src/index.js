const express = require("express");
const mongoose = require("mongoose");
const User = require("../src/models/UserModel");
const app = express();
const PORT = 3000;

/**
 * connection with the database
 */
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_USER = process.env.MONGO_USER || 'user';
const MONGO_PASS = process.env.MONGO_PASS || 'pass';
const mongoURI = `mongodb://127.0.0.1:${MONGO_PORT}/collection`;
const mongoOptions = {
    user: MONGO_USER,
    pass: MONGO_PASS
};

mongoose.connect(mongoURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> console.log(`Connected to database. port ${MONGO_PORT} user=${MONGO_USER}`))
.catch(err=>console.log(`Unable to Connect to database \n:${err}`));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});


/**
 * Routes we need
 * POST: /register
 * POST: /login
 * GET: /products
 * GET: /product/{id}
 * POST: /product
 * DELETE: /product
 * POST: /purchase
 * 
 */
app.get("/user",(req,res)=>{
  res.send("This is User GET METHOD");
})


app.post("/register",async (req,res)=>{

  //some information provided by request
  const user = req.body;
  const newUser = new User(user);
  try{
  newUser.save();
  res.status(201).json(newUser);
  }
  catch(error){
    res.status(500).json(
      {
        message:error.reigster
      }
    );
  }
  res.status(201).send("This is Register Post method");

})

app.post("/login", (req,res)=>{
  res.send("you have to log in");
})

app.get("/products",(req,res)=>{
  res.send("This is User product");
})

app.get("/product/{id}",(req,res)=>{
  res.send("This is User product id");
})

app.delete("/product",(req,res)=>{
  res.send("This is User product");
})

app.post("/purchase",(req,res)=>{
res.send("This is the item you purchases.");
})



app.listen(PORT, () => {
  console.log(`Server running on ${PORT}!`);
});