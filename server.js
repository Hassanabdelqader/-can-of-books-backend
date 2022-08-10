'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const getbook = require('./book')
const schema = require('./module/schemamodule')
mongoose.connect('mongodb+srv://hasan:hasan@cluster0.wsn6jhv.mongodb.net/?retryWrites=true&w=majority',{ useUnifiedTopology: true });

const bookModel = mongoose.model('bookModel', schema);

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get('/', (request, response) => {

  response.send('Welcome to our server Hommee')

})
app.get('/book',getbook);
app.post('/book',createNewBook);
app.delete('/book/:id',deleteBook);
app.put('/book/:id',updateBook);



function updateBook(req,res) {
 // console.log(req.params.id)
  const id = req.params.id;
  const {data }= req.body;
  bookModel.findByIdAndUpdate(id,data , {new : true}).then((rec)=>{
    res.status(201).send(rec);
  }).catch(error =>{
    res.status(501).send(error);
  })


}
function deleteBook(req,res) {
  console.log(req.params.id)

  bookModel.findByIdAndDelete(req.params.id).then((rec)=>{
    res.status(201).send(rec);
  }).catch(error =>{
    res.status(501).send(error);
  })


}

function createNewBook(req,res) {
  const data = req.body;
  const book = new bookModel(data);
  console.log(data)
  try {
    book.save();
  res.status(201).send(book);
  } catch (error) {
    res.status(500).send(error);
  }
}






app.listen(PORT, () => console.log(`listening on ${PORT}`));
