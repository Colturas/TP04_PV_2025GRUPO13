import React from 'react';

function SearchBar({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar por nombre o ID"
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
