import fs from 'fs';
import path from 'path';

const REVIEWS_FILE = path.join(__dirname, './../data/reviews.json');

/**
 * Reviews Class
 *
 * @export
 * @class Reviews
 */
export default class Reviews {
  /**
   * Creates an instance of Reviews.
   * @param {String} sortBy
   * @param {String} travelledWithFilter
   * @memberof Reviews
   */
  constructor(sortBy , travelledWithFilter) {
    let reviews;
    let sortedBy = sortBy ? sortBy : 'entryDate';

    reviews = fs.readFileSync(REVIEWS_FILE);
    reviews = JSON.parse(reviews);

    if (sortBy) {
      reviews = reviews.sort((a, b) => b[sortedBy] - a[sortedBy]);
    }

    if (travelledWithFilter) {
      reviews = reviews.filter(({traveledWith}) => traveledWith === travelledWithFilter);
    }

    this.reviews = reviews;
  }

  /**
   * Gets a page of reviews
   *
   * @param {Number} pageNo
   * @returns Object
   * @memberof Reviews
   */
  getPage(pageNo) {
    const pageSize = 10;
    const lastPage = Math.ceil(this.reviews.length / pageSize);
    const currentPage = pageNo > lastPage ? lastPage : pageNo;
    const pageFirstReviewIndex = (currentPage - 1) * 10;
    const pageReviews = this.reviews.slice(pageFirstReviewIndex,  pageFirstReviewIndex + pageSize);

    return { pageReviews, lastPage, currentPage };
  }
}
