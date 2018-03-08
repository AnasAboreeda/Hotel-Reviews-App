import moment from 'moment';

/**
 * when the review is older than 5 years its weight value defaults to 0.5.
 * Otherwise it equals: 1 - (current_year - year_of_review)*0.1
 *
 * @export
 * @class AverageCalculator
 */
export default class AverageCalculator {

  /**
   * Returns the average weighted
   *
   * @static
   * @param {Date|DateString|Epoch} reviewDate
   * @param {Number} score
   * @returns
   * @memberof AverageCalculator
   */
  static weightReview (reviewDate, score) {
    if (score == null || score < 0) {throw new Error('Invalid Score!!');}
    if(!reviewDate || !moment(reviewDate).isValid()) {throw new Error('You need to provide a valid review date');}

    let weightedScore = 0;
    const reviewYear = moment(reviewDate).year();
    const currentYear = moment().year();
    const yearsDiff = currentYear - reviewYear;

    if (yearsDiff > 5) {
      weightedScore = score * 0.5;
    } else {
      weightedScore = score * (1 - (yearsDiff * 0.1));
    }

    return weightedScore;
  }

  /**
   * Calculates the averages of a specific aspect from array of rates
   *
   * @static
   * @param {Array} arr
   * @param {String} aspect
   * @returns
   * @memberof AverageCalculator
   */
  static calculateAverage(arr, aspect) {
    if(!arr || arr.length === 0) {throw new Error('Can no calculated the average of nothing! please provide an array as an input');}
    const sum = arr.reduce((a, b) => {
      const score = b[aspect];
      const reviewDate = b.entryDate;
      const weightedScore = this.weightReview(reviewDate, score);

      return ((a + weightedScore));
    }, 0);

    return sum / arr.length;
  }
}
