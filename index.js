const express = require("express")
const {MongoClient} = require('mongodb');
require('dotenv').config()
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || localhost;

const app = express()

app.get("/", function(req, res){
    res.send("working well though")
})

const mongoDbURL = process.env.MONGODB_URL|| 'mongodb://127.0.0.1:27017/todos';

mongoose.connect(
    mongoDbURL,
).then(() => {
    app.listen(PORT, HOST, () => {
        console.log(`Todos Service Up and Running on ${PORT}`);
    })
}).catch((error => {
    console.log(error)
}));

async function main(){
    const uri = "mongodb+srv://lovenshier:1234@cluster0.mwqem.mongodb.net/test?retryWrites=true&w=majority";


    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await  listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

