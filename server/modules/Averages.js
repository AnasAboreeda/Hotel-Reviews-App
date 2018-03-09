/* Assumptions I made:
  - I assumed that we can deal with all the reviews in the memory.
*/

import AveragesCalculator from './AverageCalculator';

/**
 * Averages Class
 *
 * @export
 * @class Averages
 */
export default class Averages {
  /**
   * Creates an instance of Averages.
   * @param {Array} reviews
   * @param {String} traveledWith
   * @memberof Averages
   */
  constructor(reviews, traveledWith) {
    this.reviews = reviews;

    if (traveledWith) {
      this.reviews = this.reviews.filter(x => x.traveledWith === traveledWith);
    }

    this.averages = this.getAverages();
  }

  /**
   * Calculates the average of the general rating
   *
   * @static
   * @param {Array} arr
   * @returns Number
   * @memberof Averages
   */
  static calculateAvgGeneralRating(arr) {
    const generalRatingArr = arr
      .filter(({ ratings }) => ratings.general.general > 0)
      .map(({ entryDate, ratings }) => ({
        entryDate,
        rate: ratings.general.general,
      }));
    return AveragesCalculator.calculateAverage(generalRatingArr, 'rate');
  }

  /**
   * Calculates the average of any aspect rates
   *
   * @static
   * @param {Array} arr
   * @param {String} aspect
   * @returns Number
   * @memberof Averages
   */
  static calculateAspectAverage(arr, aspect) {
    const aspectArr = arr
      .filter(({ ratings }) => ratings.aspects[aspect] > 0)
      .map(({ entryDate, ratings }) => ({
        entryDate,
        rate: ratings.aspects[aspect],
      }));

    if (aspectArr.length === 0) {
      return 0;
    }

    return AveragesCalculator.calculateAverage(aspectArr, 'rate');
  }

  /**
   * Gets the average rates of the reviews
   *
   * @returns Object
   * @memberof Averages
   */
  getAverages() {
    const averages = {};
    const reviewsArr = this.reviews;

    averages.general = Averages.calculateAvgGeneralRating(reviewsArr);

    const aspects = ['location', 'service', 'priceQuality', 'food', 'room',
      'childFriendly', 'interior', 'size', 'activities', 'restaurants',
      'sanitaryState', 'accessibility', 'nightlife', 'culture', 'surrounding',
      'atmosphere', 'noviceSkiArea', 'advancedSkiArea', 'apresSki', 'beach',
      'entertainment', 'environmental', 'pool', 'terrace'];

    for (let i = 0, aspectsLen = aspects.length; i < aspectsLen; i += 1) {
      const aspect = aspects[i];
      averages[aspect] = Averages.calculateAspectAverage(reviewsArr, aspect);
    }

    return averages;
  }
}
