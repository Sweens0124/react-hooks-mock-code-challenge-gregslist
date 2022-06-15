import React, { useState } from "react";

function Search ({ items, setItems }) {
  const [ searchQuery, setSearchQuery ] = useState('')

  const filteredItems = items.filter((item) => (item.description.toLowerCase().includes(searchQuery.toLowerCase())))

  function handleSubmit (e) {
    e.preventDefault();
    setItems(filteredItems)
    setSearchQuery('')
  }

  function handleOnChange (e) {
    setSearchQuery(e.target.value);
  }

  return (
    <form className="searchbar" onSubmit={ handleSubmit }>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={ searchQuery }
        onChange={ handleOnChange }
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
