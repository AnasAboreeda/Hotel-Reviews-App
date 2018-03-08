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
            <option value="FAMILY">FAMILY</option>
            <option value="FRIENDS">FRIENDS</option>
            <option value="COUPLE">COUPLE</option>
            <option value="SINGLE">SINGLE</option>
            <option value="OTHER">OTHER</option>
            </FormControl>
          </FormGroup>{' '}
          <FormGroup controlId="sortSelect">
            <ControlLabel>Sort</ControlLabel>{' '}
            <FormControl componentClass="select" placeholder="sort By" onChange={this.handleSort.bind(this)}>
            <option value="entryDate">entryDate</option>
            <option value="travelDate">travelDate</option>
            </FormControl>
          </FormGroup>{' '}
        </Form>
      </div>
    )
  }
}

export default TopBar;
