"use client";

import React, { useState } from "react";

function ColourPicker() {
  const [colour, setColour] = useState("#FFFFFF");

  const changeColour = (event) => {
    setColour(event.target.value);
  };

  return (
    <div className="flex items-center justify-center py-16 flex-col h-[100vh] bg-gray-200 gap-10">
      <h1 className="text-gray-900 font-extrabold text-5xl">Colour Picker </h1>
      <div className="flex shadow-xl h-96 w-96 rounded-xl items-center justify-center" style={{ backgroundColor: colour }}>
        <p className="font-semibold">{colour}</p>
      </div>
      <div className="flex flex-col items-center">
        <label className="text-gray-800 font-extrabold text-xl">Select Colour</label>
        <input type="color" value={colour} onChange={changeColour} />
      </div>
    </div>
  );
}

export default ColourPicker;
