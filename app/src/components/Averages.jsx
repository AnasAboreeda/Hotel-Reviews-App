import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAverages } from './../actions';
import { store } from './../index';
import RateBar from './RateBar';
import './../styles/App.css';

class Averages extends Component {
  componentDidMount() {
    store.dispatch(getAverages(this.props.traveledWith));
  }

  render() {
    return (
      <section className="averages-container">
        <div className="average-rates">
          {this.props.averages && Object.keys(this.props.averages)
            .map(key => (this.props.averages[key] > 0 ?
              <RateBar key={key} title={key} rate={this.props.averages[key]} /> :
              null
            ))}
        </div>
      </section>
    );
  }
}

Averages.defaultProps = {
  traveledWith: '',
  averages: {},
};

Averages.propTypes = {
  averages: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  traveledWith: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    averages: state.averages.averages,
  };
}

export default connect(mapStateToProps, null)(Averages);
