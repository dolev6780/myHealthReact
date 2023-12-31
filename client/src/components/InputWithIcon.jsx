import React from 'react'

export default function InputWithIcon({icon,type,setState,isrequired,placeholder}) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        {icon}
      </div>
      <input
        type={type}
        className="w-full p-3 pl-12 text-sm rounded-lg bg-black bg-opacity-0 border-white border-2 placeholder:text-white"
        placeholder={placeholder}
        required={isrequired}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
    </div>
  );
}
