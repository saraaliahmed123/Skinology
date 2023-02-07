// server/index.js
const express = require('express');
var cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());


app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('Hello ExpressJS')
    
})

app.post('/', (req, res) => {
    res.send('Hello ExpressJS')
    console.log("HERE")
    
})


app.listen(3001, () => {
    console.log("Server listening on port 3001");
  });
