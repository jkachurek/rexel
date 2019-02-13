import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './SearchBox.scss';

const SearchBox = ({
  width,
}) => {
  // const [searchClause, setSearchClause] = useState('');
  // const [results, setResults] = useState([]);

  return (
    <div className="search-box-wrapper">
      <input
        type="text"
        className="search-box"
        style={{ width }}
        placeholder="What are you looking for?"
      />
    </div>
  );
};

SearchBox.propTypes = {
  width: PropTypes.string,
};

SearchBox.defaultProps = {
  width: '100%',
};

export default SearchBox;
