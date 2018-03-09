import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ItemLabel from './ItemLabel';

class RateBar extends Component {
  render() {
    const rate = this.props.rate * 10;
    return (
      <div className="rate-bar">
        <ItemLabel text={this.props.title} />
        <ProgressBar bsStyle="warning" now={rate} label={`${Math.round(rate)}%`} />
      </div>
    );
  }
}

RateBar.propTypes = {
  rate: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default RateBar;
