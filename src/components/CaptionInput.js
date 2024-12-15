import React, { useState } from "react";
import "./CaptionInput.css";

const CaptionInput = ({ onAddCaption }) => {
  const [text, setText] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !start || !end) return alert("All fields are required!");
    onAddCaption(text, parseFloat(start), parseFloat(end));
    setText("");
    setStart("");
    setEnd("");
  };

  return (
    <form className="caption-input-form" onSubmit={handleSubmit}>
      <div>
        <label>Caption Text:</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter caption text"
        />
      </div>
      <div>
        <label>Start Time (seconds):</label>
        <input
          type="number"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          placeholder="e.g., 0.0"
        />
      </div>
      <div>
        <label>End Time (seconds):</label>
        <input
          type="number"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          placeholder="e.g., 5.0"
        />
      </div>
      <button type="submit">Add Caption</button>
    </form>
  );
};

export default CaptionInput;
