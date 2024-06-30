"use client";

import React, { useState } from "react";
import styles from "../styles/randomNumGen.module.css";

export default function RandomNumGen() {

  const [randomNum, setRandomNum] = useState(0);

  const getRandomNum = () => {
    setRandomNum(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>{randomNum}</label>
      <button className={styles.button} onClick={getRandomNum}>
        Random Number
      </button>
    </div>
  );
}
