import React from 'react';
import PropTypes from 'prop-types';
import RateBar from './RateBar';

const ReviewsRatingBars = ({ rates }) => {
  const generalRate = rates.general.general;
  const { aspects } = rates;

  return (
    <div className="ratings-container">
      <RateBar title="General Rate" rate={generalRate} />
      {Object.keys(aspects).map(key =>
          (aspects[key] > 0 ? <RateBar key={key} title={key} rate={aspects[key]} /> : null))}
    </div>
  );
};

ReviewsRatingBars.propTypes = {
  rates: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default ReviewsRatingBars;
