var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var blankSchema = new Schema({
  name: {type: String, required: true, index: true},
  data: {}
});

module.exports = mongoose.model('Blank', blankSchema);
