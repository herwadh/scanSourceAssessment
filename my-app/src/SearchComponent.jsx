import React, { useState } from 'react';

function SearchComponent({ data }) {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchValue(value);

    if (value.trim() === '') {
      setSearchResults([]);
    } else {
      // Perform the search logic here
      const filteredResults = data.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  };

  return (
    <div className='search-container'>
      <input
        type="text"
        value={searchValue}
        onChange={handleSearch}
        placeholder="Search..."
      />
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      ) : (
        searchValue.trim() !== '' && <p>No match found</p>
      )}
    </div>
  );
}

export default SearchComponent;