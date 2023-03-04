const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

/**
 * connection with the database
 */
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_USER = process.env.MONGO_USER || 'user';
const MONGO_PASS = process.env.MONGO_PASS || 'pass';
const mongoURI = `mongodb://localhost:${MONGO_PORT}/collection`;
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


app.post("/register",(req,res)=>{

  //some information provided by request

  res.send("This is Register Post method");

})

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}!`);
});