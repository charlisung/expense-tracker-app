import React, { useState } from "react";

export default function AddList({ addList }) {
  const [text, setText] = useState("");
  const [price, setPrice] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (text.length && price.length) {
      addList({ text, price });
      setText("");
      setPrice("");
    } else {
      alert("Please fill out the form!");
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add item..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="number"
        placeholder="Add price..."
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button className="submit-btn">Save</button>
    </form>
  );
}
