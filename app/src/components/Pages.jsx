import React, { Component } from 'react';
import { Pager } from 'react-bootstrap';

class Pages extends Component {
  render() {
    const previousActive = this.props.currentPage > 1;
    const nextActive = this.props.currentPage < this.props.lastPage;

    return (
      <Pager>
        <Pager.Item previous disabled={!previousActive} onClick={() => this.props.getPage(this.props.currentPage - 1)}>
          &larr; Previous Page
        </Pager.Item>

        {this.props.currentPage} / {this.props.lastPage}

        <Pager.Item next disabled={!nextActive} onClick={() => this.props.getPage(this.props.currentPage + 1)}>
          Next Page &rarr;
        </Pager.Item>
      </Pager>
    )
  }
}

export default Pages;
