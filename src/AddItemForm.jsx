import React, { useState } from "react";

const AddItemForm = ({ onAdd }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.trim() !== "") {
      onAdd(newItem); // Add item to the list
      setNewItem(""); // Clear the input field
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-item-form">
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter a new item"
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;
