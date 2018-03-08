import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { getReviews, getAverages } from './../actions';
import {store} from './../index.js';
import TopBar from './TopBar';
import Pages from './Pages';
import Averages from './Averages';
import ReviewsRatingBars from './ReviewsRatingBars';
import ItemLabel from './ItemLabel';
import './../styles/App.css';

class Review extends Component {
  render () {
    const r = this.props.review;
    const loc = r.locale;
    const entryTime = moment(r.entryDate).isValid() ? moment(r.entryDate).fromNow() : null;
    const travelDate = moment(r.travelDate).isValid() ? moment(r.travelDate).fromNow() : null;

    return (
      <div>
        {r.titles[loc] ?
          <div className='review-title'>
            <ItemLabel text='Title' />
            {r.titles[loc]}
          </div>
          : null
        }
        <div className='review-user'>
        <ItemLabel text='User name' />
          {r.user}
        </div>
        <div className='review-traveledWith'>
          <ItemLabel text='Travelled With' />
          {r.traveledWith}
        </div>
        <div className='review-entryDate'>
          <ItemLabel text='Entry Date' />
          {entryTime}
        </div>
        <div className='review-travelDate'>
        <ItemLabel text='Travel Date' />
        {travelDate}
        </div>
        <div className='review-texts'>
          <ItemLabel text='Review' />
          {r.texts[loc]}
        </div>
      </div>
    )
  }
}

class Reviews extends Component {

  componentDidMount() {
    const reviewOptions = {
      sort: this.props.sort,
      page: 1,
      traveledWith: this.props.traveledWith
    }
    store.dispatch(getReviews(reviewOptions));
  }

  getPage(page) {
    const reviewOptions = {
      sort: this.props.sort,
      page,
      traveledWith: this.props.traveledWith
    }
    store.dispatch(getReviews(reviewOptions));
  }

  getTravelledWith(traveledWith) {
    const reviewOptions = {
      sort: this.props.sort,
      page: 1,
      traveledWith
    }
    store.dispatch(getAverages(reviewOptions));
    store.dispatch(getReviews(reviewOptions));
  }

  getSorted(sortBy) {
    const reviewOptions = {
      sort: sortBy,
      page: 1,
      traveledWith: this.props.traveledWith
    }
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
        <TopBar traveledWith={this.getTravelledWith.bind(this)} sortBy={this.getSorted.bind(this)}/>
        <div className="section-title">
          <h3>
            Averages
          </h3>
        </div>
        <Averages traveledWith={this.props.traveledWith}/>
        <div className="section-title">
          <h3>
            Reviews
          </h3>
        </div>
        {this.props.reviews && this.props.reviews.map((review) => {
          return (
            <div className='review-container'>
              <Review key={review.id} review={review} />
              <ReviewsRatingBars rates={review.ratings}/>
            </div>
          )
        })}

        <Pages currentPage={this.props.currentPage} lastPage={this.props.lastPage} getPage={this.getPage.bind(this)} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    reviews: state.reviews.reviews,
    sort: state.reviews.sort,
    traveledWith: state.reviews.traveledWith,
    currentPage: parseInt(state.reviews.currentPage, 10),
    lastPage: parseInt(state.reviews.lastPage, 10)
  }
}

export default connect(mapStateToProps, null)(Reviews);
