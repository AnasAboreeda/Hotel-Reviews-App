import React, { Component } from 'react';
import RateBar from './RateBar';

class ReviewsRatingBars extends Component {
  render() {
    const rates = this.props.rates;
    const generalRate = rates.general.general;
    const aspects = rates.aspects;

    return (
      <div className="ratings-container">
        <RateBar title="General Rate" rate={generalRate} />
        {Object.keys(aspects).map(key =>
          (aspects[key] > 0 ? <RateBar key={key} title={key} rate={aspects[key]} /> : null),)}
      </div>
    );
  }
}

export default ReviewsRatingBars;
