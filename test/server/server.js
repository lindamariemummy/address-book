'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;
require('../../server');

describe('server', function() {
  it('can make a new contact', function(done) {
    chai.request('http://localhost:3000')
    .post('/api/newcontact')
    .end(function(err, res) {
      expect(err).to.eql(null);
      done();
    });
  });

  it('can view all contacts', function(done) {
    chai.request('http://localhost:3000')
    .get('/api/allcontacts')
    .end(function(err, res) {
      expect(err).to.eql(null);
      done();
    });
  });

  it('can view contacts by last name', function(done) {
    chai.request('http://localhost:3000')
    .get('/api/contactsbylastname?q=A')
    .end(function(err, res) {
      expect(err).to.eql(null);
      done();
    });
  });
});
