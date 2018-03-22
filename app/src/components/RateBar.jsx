import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ItemLabel from './ItemLabel';

const RateBar = ({ rate, title }) => {
  const fixedRate = rate * 10;
  return (
    <div className="rate-bar">
      <ItemLabel text={title} />
      <ProgressBar bsStyle="warning" now={fixedRate} label={`${Math.round(fixedRate)}%`} />
    </div>
  );
};

RateBar.propTypes = {
  rate: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default RateBar;
