import React from "react";

export default function CustomInput({ type, setState, placeholder }) {
  return (
    <div className="relative mt-4 mb-4 px-6">
      <input
        type={type}
        className="w-full p-3 border-2 text-xl border-green-500 rounded-lg placeholder:text-2xl
      "
        placeholder={placeholder}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
    </div>
  );
}
