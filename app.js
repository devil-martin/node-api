const express = require("express");
const ConnectDB = require('./db/connectDB');
const auth = require('./routes/auth.routes');
require('dotenv').config();

const port = process.env.PORT || 1234;

const app = express();
app.use(express.json());

app.get("/", (req,res)=>{
    res.status(201).send('Root URI hits');
});

app.use('/auth',auth);

app.all("*", (req,res)=>{res.status(404).json({status:'failed',data:'Invalid URI...'})});

app.listen(port,() => {
        ConnectDB().then(
            console.log(`DB connected \nAnd server is running on http://localhost:${port}`)
        );
});