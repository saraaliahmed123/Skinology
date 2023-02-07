// server/index.js
const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors());

const users = require('./routes/users');

mongoose.set("strictQuery", false);

// mongoose.connect('mongodb://127.0.0.1/Skinology', {useNewUrlParser: true});

// mongoose.connect("mongodb://127.0.0.1:27017/Skinology", { useNewUrlParser: true})

mongoose.connect("mongodb+srv://sara:Password123@skinology.ctcwnww.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true})

//mongodb+srv://sara:Password123@skinology.ctcwnww.mongodb.net/?retryWrites=true&w=majority

// mongoose.set('strictQuery', false);

app.use(express.urlencoded({extended: false}))

app.use('/users', users);


// app.post("/user/register", async (req, res) => {
//     // const { firstName, lastName, email, password } = req.body;
//     const newUser = new User({ 
//        firstName: req.body.firstName, 
//        lastName: req.body.lastName, 
//        email: req.body.email, 
//        password: req.body.password 
//     });
//     try{
//        await newUser.save();
//     }
//     catch(e){
//        console.log(e)
//     }
//   });

app.get('/', (req, res) => {
    res.send('Hello ExpressJS')
    
})

// app.post('/', (req, res) => {
//     res.send('Hello ExpressJS')
//     console.log("HERE")
    
// })


app.listen(3001, () => {
    console.log("Server listening on port 3001");
  });
