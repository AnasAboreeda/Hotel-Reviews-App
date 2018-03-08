import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Reviews from './Reviews';

class App extends Component {
  render() {
    return(
      <div>
        <Header hotelName={this.props.hotelName} />
        <Reviews />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { hotelName: state.hotelName }
}

export default connect(mapStateToProps, null)(App);
