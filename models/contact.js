'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({
  firstName: 'String',
  lastName: 'String',
  address: 'String',
  city: 'String',
  state: 'String',
  zip: 'String', //id number
  birthday: 'String'
});

module.exports = mongoose.model('Contact', contactSchema);
