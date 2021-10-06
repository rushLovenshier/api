const express = require("express")
require('dotenv').config()
const mongoose = require('mongoose');

const PORT = process.env.SERVER_PORT;

const app = express()

app.get("/", function(req, res){
    res.send("working well though")
})

mongoose.connect(
    'mongodb://127.0.0.1:27017/todos',
).then(() => {
    app.listen(PORT, () => {
        console.log(`Todos Service Up and Running on ${PORT}`);
    })
}).catch((error => {
    console.log(error)
}));