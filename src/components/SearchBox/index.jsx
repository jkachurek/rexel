import React, { useState } from 'react';
import Autocomplete from 'react-autocomplete';
import debounce from 'debounce';

import './SearchBox.scss';

import { searchVehicles } from '../../services/api';

const runApi = (searchClause, resultsFn) => {
  
  searchVehicles(searchClause)
    .then(res => resultsFn(res));
  
  // console.log('calling the api with ', searchClause);
}

const SearchBox = () => {
  const [searchClause, setSearchClause] = useState('');
  const [results, setResults] = useState([]);

  return (
    <div className="search-box-wrapper">
      <Autocomplete
        onChange={e => {
          setSearchClause(e.target.value);
          debounce(runApi(e.target.value, setResults), 200);
        }}
        getItemValue={item => item.name}
        renderItem={(item, highlighted) => (
          <div
            className={`search-result ${highlighted ? 'highlighted' : ''}`}
            key={item.name}
          >
            {item.name}
          </div>
        )}
        value={searchClause}
        items={results}
        autoHighlight={true}
        inputProps={{
          placeholder: "What are you looking for?",
          className: "search-box",
        }}
        wrapperStyle={{ width: '100%' }}
        menuStyle={{
          width: '100%',
          boxShadow: '0px 4px 5px 1px rgba(0, 0, 0, 0.3)',
        }}
        onSelect={item => {
          setSearchClause(item);
          setResults([]);
        }}
      />
    </div>
  );
};

export default SearchBox;
