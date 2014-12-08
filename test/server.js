'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;
require('../server');

describe('server', function() {
  it('returns correct values', function(done) {
    chai.request('http://localhost:3000')
    .post('/api/calcmmm')
    .send([3, 4, 6, 6])
    .end(function(err, res) {
      //console.log('this should print', res);
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.body.mean).to.eql(4.75);
      expect(res.body.median).to.eql(5);
      expect(res.body.mode).to.eql(6);
      done();
    });
  });
});
