import React, { useState } from "react";
import AddItemForm from "./AddItemForm";
import ItemList from "./ItemList";
import "./App.css"; // Importing the CSS file

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleDeleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <div className="app-box">
        <h1 className="app-title">Item List</h1>
        <AddItemForm onAdd={handleAddItem} />
        <ItemList items={items} onDelete={handleDeleteItem} />
      </div>
    </div>
  );
};

export default App;
