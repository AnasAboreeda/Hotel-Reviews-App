import React from 'react';
import { Pager } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Pages = ({ currentPage, lastPage, getPage }) => {
  const previousActive = currentPage > 1;
  const nextActive = currentPage < lastPage;

  return (
    <Pager>
      <Pager.Item
        previous
        disabled={!previousActive}
        onClick={() => getPage(currentPage - 1)}
      >
          &larr; Previous Page
      </Pager.Item>

      {currentPage} / {lastPage}

      <Pager.Item
        next
        disabled={!nextActive}
        onClick={() => getPage(currentPage + 1)}
      >
          Next Page &rarr;
      </Pager.Item>
    </Pager>
  );
};

Pages.propTypes = {
  currentPage: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
  getPage: PropTypes.func.isRequired,
};

export default Pages;
