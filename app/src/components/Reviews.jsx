import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getReviews, getAverages } from './../actions';
import { store } from './../index';
import TopBar from './TopBar';
import Pages from './Pages';
import Averages from './Averages';
import ReviewsRatingBars from './ReviewsRatingBars';
import Review from './Review';
import './../styles/App.css';

class Reviews extends Component {
  constructor() {
    super();
    this.getSorted = this.getSorted.bind(this);
    this.getTravelledWith = this.getTravelledWith.bind(this);
    this.getPage = this.getPage.bind(this);
  }

  componentDidMount() {
    const reviewOptions = {
      sort: this.props.sort,
      page: 1,
      traveledWith: this.props.traveledWith,
    };
    store.dispatch(getReviews(reviewOptions));
  }

  getPage(page) {
    const reviewOptions = {
      sort: this.props.sort,
      page,
      traveledWith: this.props.traveledWith,
    };
    store.dispatch(getReviews(reviewOptions));
  }

  getTravelledWith(traveledWith) {
    const reviewOptions = {
      sort: this.props.sort,
      page: 1,
      traveledWith,
    };
    store.dispatch(getAverages(reviewOptions));
    store.dispatch(getReviews(reviewOptions));
  }

  getSorted(sortBy) {
    const reviewOptions = {
      sort: sortBy,
      page: 1,
      traveledWith: this.props.traveledWith,
    };
    store.dispatch(getReviews(reviewOptions));
  }

  render() {
    return (
      <div>
        <div className="section-title">
          <h2>
            Hotel ABCDEF Reviews
          </h2>
        </div>
        <TopBar traveledWith={this.getTravelledWith} sortBy={this.getSorted} />
        <div className="section-title">
          <h3>
            Averages
          </h3>
        </div>
        <Averages traveledWith={this.props.traveledWith} />
        <div className="section-title">
          <h3>
            Reviews
          </h3>
        </div>
        {this.props.reviews && this.props.reviews.map(review => (
          <div key={review.id} className="review-container">
            <Review review={review} />
            <ReviewsRatingBars rates={review.ratings} />
          </div>
          ))}

        <Pages currentPage={this.props.currentPage} lastPage={this.props.lastPage} getPage={this.getPage} />
      </div>
    );
  }
}

Reviews.defaultProps = {
  sort: '',
  traveledWith: '',
  reviews: [],
};

Reviews.propTypes = {
  sort: PropTypes.string,
  traveledWith: PropTypes.string,
  reviews: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  lastPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    reviews: state.reviews.reviews,
    sort: state.reviews.sort,
    traveledWith: state.reviews.traveledWith,
    currentPage: parseInt(state.reviews.currentPage, 10),
    lastPage: parseInt(state.reviews.lastPage, 10),
  };
}

export default connect(mapStateToProps, null)(Reviews);
