import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class TopBar extends Component {
  handleTravelledWith (e) {
    this.props.traveledWith(e.target.value);
  }

  handleSort (e) {
    this.props.sortBy(e.target.value);
  }

  render() {
    return (
      <div className='top-bar'>
        <Form inline>
          <FormGroup controlId="traveledWithSelect">
            <ControlLabel>Travelled With</ControlLabel>{' '}
            <FormControl componentClass="select" placeholder="Traveled With" onChange={this.handleTravelledWith.bind(this)}>
            <option value="">Any</option>
            <option value="FAMILY">Family</option>
            <option value="FRIENDS">Friends</option>
            <option value="COUPLE">Couple</option>
            <option value="SINGLE">Single</option>
            <option value="OTHER">Other</option>
            </FormControl>
          </FormGroup>{' '}
          <FormGroup controlId="sortSelect">
            <ControlLabel>Sort</ControlLabel>{' '}
            <FormControl componentClass="select" placeholder="sort By" onChange={this.handleSort.bind(this)}>
            <option value="entryDate">Review Date</option>
            <option value="travelDate">Travel Date</option>
            </FormControl>
          </FormGroup>{' '}
        </Form>
      </div>
    )
  }
}

export default TopBar;
