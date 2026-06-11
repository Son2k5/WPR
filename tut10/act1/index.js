const {MongoClient} = require("mongodb");
const url = "mongodb://localhost:27017/";

 function connectMongo(dbName) {
    const client = new MongoClient(url);
     client.connect();
    return client.db(dbName);
}
const db = connectMongo("eng-dict");
const words = db.collection("words");


words.insertOne({
    word:"dog",
    definition:"friend"
});