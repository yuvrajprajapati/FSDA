import React, { useState } from "react";
import "./Image.css";
import cat from "./cat.jpg";

function ImageManipulation() {
  const [height, setHeight] = useState(100);
  const [width, setWidth] = useState(100);
  const [red, setRed] = useState();
  const [green, setGreen] = useState();
  const [blue, setBlue] = useState();
  const [imgrotate, setImgRotate] = useState(0);
  function enhanceheight() {
    setHeight(height + 20);
  }
  function enhancewidth() {
    setWidth(width + 20);
  }
  function changeColor() {
    setRed(Math.random() * 255);
    setGreen(Math.random() * 255);
    setBlue(Math.random() * 255);
  }
  function imageRotate() {
    setImgRotate(imgrotate + 30);
  }
  return (
    <div className="imageCard">
      <div
        className="catdiv"
        style={{ backgroundColor: `RGB(${red},${green},${blue})` }}
      >
        <img
          style={{ transform: `rotate(${imgrotate}deg)` }}
          src={cat}
          alt={cat.jpg}
          width={width}
          height={height}
        />
      </div>
      <div className="buttondiv">
        <button onClick={enhanceheight} style={{ backgroundColor: "orange" }}>
          {" "}
          Enhance Height
        </button>
        &nbsp; &nbsp; &nbsp;
        <button onClick={enhancewidth}> Enhance width</button>
        <br />
        <button onClick={imageRotate}> Image Rotate</button>
        &nbsp; &nbsp; &nbsp;
        <button onClick={changeColor}> color change</button>
      </div>
    </div>
  );
}

export default ImageManipulation;
