import React from "react";

export default function CustomInput2({ type, placeholder, setState }) {
  return (
    <div>
      <input
      className="w-20 p-2"
        type={type}
        placeholder={placeholder}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
    </div>
  );
}
