const mongoose = require("mongoose")
/**
 * connection with the database
 */
function connectDatabase(){
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
    .catch((e)=>{
        console.log(e);
        throw Error(`Cannot Connect to MongoDB dataBase : ${mongoURI} at port ${MONGO_PORT} `);
    });

    ;
}

module.exports = {connectDatabase};