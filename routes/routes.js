'use strict';

var Contact = require('../models/contact');

module.exports = function(app) {
  app.post('/api/newcontact', function(req, res) {
    var newContact = new Contact();
    newContact.firstName = req.body.firstName;
    newContact.lastName = req.body.lastName;
    newContact.address = req.body.address;
    newContact.city = req.body.city;
    newContact.state = req.body.state;
    newContact.zip = req.body.zip;
    console.log(req.body);
    newContact.save(function(err, contact) {
      if (err) return res.json({err:err});
      else console.log('contact', contact);
      res.status(200).json(contact);
    });
  });

  //get all contacts
  app.get('/api/allcontacts', function(req, res) {
    Contact.find({}, function(err, contacts) {
      if (err) return res.json({err:err});
      else console.log('contact', contacts);
      res.status(200).json(contacts);
    });
  });

  //get contacts by last name
  app.get('/api/contactsbylastname', function(req, res) {
    console.log(req.query.q);
    var reg = new RegExp('^' + req.query.q + '', 'i');
    console.log(reg);
    Contact.find({lastName: reg}, function(err, contacts) {
      if (err) return res.json({err:err});
      else console.log('contact', contacts);
      res.status(200).json(contacts);
    });
  });
};
