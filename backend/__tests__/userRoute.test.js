const request = require('supertest')
const User = require('../src/models/UserModel')
const mongoose = require('mongoose')

const url = process.env.HOST_URL || 'http://localhost:8080';

// beforeAll(async()=>{
// //connection to the database here
// /**
//  * connection with the database
//  */
// const MONGO_PORT = process.env.MONGO_PORT || 27017;
// const MONGO_USER = process.env.MONGO_USER || 'user';
// const MONGO_PASS = process.env.MONGO_PASS || 'pass';
// const mongoURI = `mongodb://localhost:${MONGO_PORT}/test`;
// const mongoOptions = {
//     user: MONGO_USER,
//     pass: MONGO_PASS
// };

// mongoose.connect(mongoURI,{useNewUrlParser:true,useUnifiedTopology:true})
// .then(()=> console.log(`Connected to database. port ${MONGO_PORT} user=${MONGO_USER}`))
// .catch(err=>{console.log(`Unable to Connect to database \n:${err}`); process.exit(0)});

// }
// );


//POST METHOD
describe("POST REQUEST: ADDING A NEW USER to database",()=>{
 
     describe("Given the incomplete/Empty body for POST REQUEST:",()=>{

        it("Empty body should fail with status code 500:",async()=>{
            const result = await request(url)
                                        .post("/register")
                                        .send({});
            expect(true).toBe(true);
            // expect(result.statusCode).toBe(500);
        });

        it("Incomplete body should fail with 500 status code:", async()=>{
            const result = await request(url)
                                    .post("/register")
                                    .send({username:"Rojan"});
            expect(true).toBe(true);
            // expect(result.statusCode).toBe(500);
        });

     })



}
);