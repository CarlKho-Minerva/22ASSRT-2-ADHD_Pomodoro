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


// ############# Routes for creating, updating, and deleting tasks: Create routes for creating, updating, and deleting tasks. #############
app.post('/tasks', (req, res) => {
  const task = new Task({
    name: req.body.name
  });
  task.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send('Task created successfully');
    }
  });
});


// ############# Functions for retrieving task lists and progress data: Functions for querying the database and returning data to the front-end, such as lists of tasks or progress data for a user. #############
const getTasks = async (userId) => {
  const tasks = await Task.find({ userId });
  return tasks;
};

// ############# Routes for managing user accounts #############
app.post('/users', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username });
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d'
    });
    res.send({ token });
  } catch (err) {
    res.status(400).send(err);
  }
});

// ############# Routes for integrating with other productivity tools #############
app.get('/tasks/:tool', async (req, res) => {
  const { tool } = req.params;
  try {
    const tasks = await getTasksFromTool(tool, req.headers);
    res.send(tasks);
  } catch (err) {
    res.status(500).send(err);
  }
});


// ############# Server-side validation and error handling #############
app.post('/tasks', (req, res) => {
  const task = new Task({
    name: req.body.name
  });
  task.save((err) => {
    if (err) {
      handleError(res, err);
    } else {
      res.send('Task created successfully');
    }
  });
});


