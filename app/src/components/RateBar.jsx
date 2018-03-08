import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';
import ItemLabel from './ItemLabel';

class RateBar extends Component {
  render() {
    const rate = this.props.rate * 10;
    return (
      <div className='rate-bar'>
        <ItemLabel text={this.props.title} />
        <ProgressBar bsStyle="warning" now={rate} label={`${Math.round(rate)}%`} />
      </div>
    )
  }
}

export default RateBar;
