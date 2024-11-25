import React from "react";
import Item from "./Item";

const ItemList = ({ items, onDelete }) => {
  return (
    <div className="item-list">
      {items.length > 0 ? (
        items.map((item, index) => (
          <Item key={index} item={item} onDelete={() => onDelete(index)} />
        ))
      ) : (
        <p className="empty-message">No items in the list. Add some!</p>
      )}
    </div>
  );
};

export default ItemList;
