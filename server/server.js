// server/index.js
const express = require('express');
const mongoose = require('mongoose');
require("dotenv/config")
mongoose.Promise = global.Promise;

const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

const user = require('./routes/user');
const routine = require('./routes/routine');
const record = require('./routes/record');
const shelf = require('./routes/shelf');
const search = require('./routes/search');
const review = require('./routes/review');

mongoose.set("strictQuery", false);

mongoose.connect(process.env.DB_Connection, { useNewUrlParser: true})

app.use(express.urlencoded({extended: false}))

app.use('/user', user);
app.use('/routine', routine);
app.use('/record', record);
app.use('/shelf', shelf);
app.use('/search', search);
app.use('/review', review);


app.get('/', (req, res) => {
    res.send('Hello ExpressJp')
    
})

app.get('/:id', (req, res) => {
    res.send(req.params.id)
    
})


app.listen(3001, () => {
    //console.log("Server listening on port 3001");
  });
