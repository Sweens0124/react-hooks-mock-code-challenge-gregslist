import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer ({ items }) {

  const renderItems = items.map((item) => {
    return <ListingCard key={ item.id } item={ item } />
  })



  return (
    <main>
      <ul className="cards">
        { renderItems }
      </ul>
    </main>
  );
}

export default ListingsContainer;
