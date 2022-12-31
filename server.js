// ############# Create a server: Create a server using Node.js and a framework such as Express. #############
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// ############# Connect to the database: Connect to your MongoDB database using the MongoDB driver for Node.js. #############
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
