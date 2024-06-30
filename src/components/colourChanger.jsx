"use client";

import React from "react";
import styles from "../styles/colourChanger.module.css";

export default function ColourChanger() {
  const changeBackgroundColour = (color) => {
    const box = document.getElementById("box");
    if (box) {
      box.style.backgroundColor = color;
    }
  };

  const randomColor = () => {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const color = `rgb(${red}, ${green}, ${blue})`;

    const randomButton = document.getElementById("random");
    const box = document.getElementById("box");
    if (randomButton) {
      randomButton.style.color = color;
      box.style.backgroundColor = color;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button
          className={styles.colorButton}
          onClick={() => changeBackgroundColour("red")}
          style={{ color: "red" }}
        >
          Red
        </button>
        <button
          className={styles.colorButton}
          onClick={() => changeBackgroundColour("green")}
          style={{ color: "green" }}
        >
          Green
        </button>
        <button
          className={styles.colorButton}
          onClick={() => changeBackgroundColour("blue")}
          style={{ color: "blue" }}
        >
          Blue
        </button>
        <button
          className={styles.colorButton}
          id="random"
          onClick={randomColor}
          style={{ color: "purple" }}
        >
          Random
        </button>
      </div>
      <div id="box" className={styles.box}></div>
    </div>
  );
}
