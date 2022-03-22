require('dotenv').config();
const { MongoClient } = require('mongodb');

let db;


// function to connect to the database
async function connectToDb() {
const url = process.env.DB_URL || 'mongodb+srv://archana:Sukruti@cs628cluster.znum4.mongodb.net/EmployeeDB?retryWrites=true&w=majority';
const client = new MongoClient(url, {useNewUrlParser: true});
await client.connect();
console.log('Connected to MongoDB URL at',url);
db= client.db();
}

function getDb() {
  return db;
}
  
module.exports = {
connectToDb,   
getDb,
};
