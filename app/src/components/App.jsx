import React, { Component } from 'react';

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

export default App;
