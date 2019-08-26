const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose
  .connect(
    'mongodb://mongo:27017/pythonbeautifulsoup_mongo_1',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  app.get('/', (req, res) => {
    res.render('index', { "hello":"world" });
  });

  const port = 8081;

  app.listen(port, () => console.log('API Server running at 8081...'));