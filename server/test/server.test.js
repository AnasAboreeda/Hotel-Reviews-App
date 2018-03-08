import request from 'supertest';
import {
  assert
} from 'chai';
const port = process.env.PORT || 4567;
const apiUrl = `localhost:${port}/api`;
const agent = request(apiUrl);

describe('Server Tests', () => {
  it('Should return the first page of reviews', done => {
    agent
      .get('/reviews')
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        assert.equal(res.status, 200, 'res.status equal to 200');
        assert.equal(res.body.currentPage, 1, 'Should be the 1st page');
        assert.equal(res.body.reviews.length, 10, 'It Should return the first 10 reviews');
        done();
      });
  });

  it('Should return averages', done => {
    agent
      .get('/averages')
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        console.log('/averages', res.body);
        assert.equal(res.status, 200, 'res.status equal to 200');

        done();
      });
  });
});
