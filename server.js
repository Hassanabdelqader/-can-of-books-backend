'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const getbook = require('./book')
const schema = require('./module/schemamodule')
mongoose.connect('mongodb://127.0.0.1:27017/Books');

app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/', (request, response) => {

  response.send('Welcome to our server Hommee')

})
app.get('/book',getbook);


const bookModel = mongoose.model('bookModel', schema);

const book1 = new bookModel({
  title: 'calc',
  description: 'maths',
  status: false
});

const book2 = new bookModel({
  title: 'c++',
  description: 'programming',
  status: true
});

const book3 = new bookModel({
  title: 'React',
  description: 'SPA',
  status: false
});

// book1.save();
// book2.save();
// book3.save();




app.listen(PORT, () => console.log(`listening on ${PORT}`));
