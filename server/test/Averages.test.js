import fs from 'fs';
import path from 'path';
import { assert } from 'chai';
import Averages from './../modules/Averages';

const REVIEWS_FILE = path.join(__dirname, './../data/reviews.json');
const testData = JSON.parse(fs.readFileSync(REVIEWS_FILE));

describe('Averages Class', () => {
  it('Should calculate the average of the general rating of the accommodation', (done) => {
    const generalRatingAvg = Averages.calculateAvgGeneralRating(testData);

    assert.isAbove(generalRatingAvg, -1, 'calculateAvgGeneralRating should return a number');
    done();
  });

  it('Should return an object containing all the calculated averages', (done) => {
    const averages = new Averages(testData);
    console.log('averages', averages.averages);
    assert(typeof averages, 'object', 'It should return an object');
    assert(Object.keys(averages).length, 31, 'Object should contain 31 keys');
    done();
  });

  it('Should return an object containing all the calculated averages for a travelledWith filtered list', (done) => {
    const averages = new Averages(testData, 'COUPLE');
    console.log('averages', averages.averages);
    assert(typeof averages, 'object', 'It should return an object');
    assert(Object.keys(averages).length, 31, 'Object should contain 31 keys');
    done();
  });
});
