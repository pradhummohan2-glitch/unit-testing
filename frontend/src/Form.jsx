import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name}</p>
    </div>
  );
}

export default Form;