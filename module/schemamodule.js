

const mongoose = require('mongoose');


const BookSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: Boolean
  });

  
  module.exports = BookSchema;