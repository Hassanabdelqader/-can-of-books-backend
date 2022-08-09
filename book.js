const mongoose = require('mongoose');
const schema = require('./module/schemamodule')
const bookModel = mongoose.model('bookModel', schema);

function getBook(request, res){
    //mongoose.connect('mongodb://localhost:27017/test');
    bookModel.find({}, (error, data) => {
        if (error) console.log(`error reading from the db: ${error}`);
        else res.send(data);
    })
  
  }

  module.exports = getBook;