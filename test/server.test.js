// File: test/server.test.js
// This file contains the tests for your Express server.
const request = require('supertest');
const { expect } = require('chai');
const app = require('../server'); // Import your Express app

describe('GET /', () => {
  it('should return "Hello World from a CI/CD pipeline!"', (done) => {
    request(app)
      .get('/')
      .expect(200) // Expect HTTP status 200 (OK)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal('Hello World from a CI/CD pipeline!'); // Assert the response body
        done(); // Call done() to indicate the test is complete
      });
  });
});