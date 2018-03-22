import React from 'react';
import { Label } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ItemLabel = ({ text }) => (
  <Label className="review-item-label" bsStyle="info">{text}</Label>
);

ItemLabel.propTypes = {
  text: PropTypes.string.isRequired,
};


export default ItemLabel;
