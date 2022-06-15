import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App () {
  // LOCAL STATE
  const [ items, setItems ] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  return (
    <div className="app">
      <Header items={ items } setItems={ setItems } />
      <ListingsContainer items={ items } />
    </div>
  );
}

export default App;
