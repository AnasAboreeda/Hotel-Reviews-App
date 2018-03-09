import moment from 'moment';
import { assert } from 'chai';

import AverageCalculator from './../modules/AverageCalculator';

describe('Average Calculator', () => {
  it('Should return weighted average scores', (done) => {
    const testCases = [
      {
        score: 8,
        date: '2005-05-05',
        weightedScore: 4,
      },
      {
        score: 10,
        date: moment().subtract(1, 'year'),
        weightedScore: 9,
      },
      {
        score: 8,
        date: moment(),
        weightedScore: 8,
      },
    ];

    for (let i = 0, l = testCases.length; i < l; i += 1) {
      const weightedAverage = AverageCalculator.weightReview(testCases[i].date, testCases[i].score);

      assert.equal(weightedAverage, testCases[i].weightedScore, `weighted average should be ${testCases[i].weightedScore}`);
    }
    done();
  });
});
