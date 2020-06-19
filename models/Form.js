const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let formSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    company: {
      type: String,
    },
    intrest: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  {
    collection: 'forms',
  }
);

module.exports = mongoose.model('Form', formSchema);
