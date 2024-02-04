import React, { useEffect, useState } from 'react'

const random = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState('#000000');
  function handleRandomColorUtility(size){
    return Math.floor(Math.random()*size)
  }
  function handleRandomHexColor(){
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = "#";
    for(let i = 0; i<6; i++){
      hexColor += hex[handleRandomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }
  function handleRandomRgbColor(){
    let r = handleRandomColorUtility(256);
    let g = handleRandomColorUtility(256);
    let b = handleRandomColorUtility(256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  }
  useEffect(() => {
    if(typeOfColor === 'rgb') handleRandomRgbColor()
    else handleRandomRgbColor()
  }, [typeOfColor])
  
  return (
    <div className="w-full min-h-screen" style={{ background: color }}>
      <div className="flex items-baseline justify-around text-white">
        <button
          onClick={() => setTypeOfColor("hex")}
          className="p-2 bg-slate-600 rounded-md"
        >
          Create HEX color
        </button>
        <button
          onClick={() => setTypeOfColor("rgb")}
          className="p-2 bg-slate-600 rounded-md"
        >
          Create RGB color
        </button>
        <button
          onClick={
            typeOfColor === "hex" ? handleRandomHexColor : handleRandomRgbColor
          }
          className="p-2 bg-slate-600 rounded-md"
        >
          Create Random color
        </button>
      </div>
      <div className="flex w-full h-[90vh] items-center justify-center text-white gap-2 flex-col">
        <h3>{typeOfColor === 'rgb' ? 'RGB' : 'HEX'}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default random