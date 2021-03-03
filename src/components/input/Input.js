import React, { useState, useEffect } from "react";
import "./input.scss";

function Input({ placeholder, onInput, id, type }) {
  const [value, setValue] = useState("");

  function handleInput(e) {
    setValue(e.target.value);
  }

  useEffect(() => {
    onInput(value);
  }, [value]);

  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onInput={handleInput}
      id={id}
    />
  );
}

export default Input;
