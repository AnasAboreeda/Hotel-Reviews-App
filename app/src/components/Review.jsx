import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import ItemLabel from './ItemLabel';

class Review extends Component {
  render() {
    const r = this.props.review;
    const loc = r.locale;
    const entryTime = moment(r.entryDate).isValid() ? moment(r.entryDate).fromNow() : null;
    const travelDate = moment(r.travelDate).isValid() ? moment(r.travelDate).fromNow() : null;

    return (
      <div>
        {r.titles[loc] ?
          <div className="review-title">
            <ItemLabel text="Title" />
            {r.titles[loc]}
          </div>
          : null
        }
        <div className="review-user">
          <ItemLabel text="User name" />
          {r.user}
        </div>
        <div className="review-traveledWith">
          <ItemLabel text="Travelled With" />
          {r.traveledWith}
        </div>
        <div className="review-entryDate">
          <ItemLabel text="Entry Date" />
          {entryTime}
        </div>
        <div className="review-travelDate">
          <ItemLabel text="Travel Date" />
          {travelDate}
        </div>
        <div className="review-texts">
          <ItemLabel text="Review" />
          {r.texts[loc]}
        </div>
      </div>
    );
  }
}

Review.propTypes = {
  review: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Review;
