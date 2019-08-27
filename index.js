const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to MongoDB
// mongoose
//   .connect(
//     'mongodb://mongo:27017/',
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.json({"error":null,"payload":{ "hello":"world" }});
});

const port = 8081;

app.listen(port, '0.0.0.0', () => console.log('API Server running at 8081...'));