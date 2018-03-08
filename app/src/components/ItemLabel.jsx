import React, { Component } from 'react';
import { Label } from 'react-bootstrap';

class ItemLabel extends Component {
  render () {
    return (
      <Label className="review-item-label" bsStyle="info">{this.props.text}</Label>
    )
  }
}

export default ItemLabel;
