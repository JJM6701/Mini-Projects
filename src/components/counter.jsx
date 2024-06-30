"use client";

import styles from "../styles/counter.module.css";
import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const decrease = () => {
    setCounter((c) => c - 1);
  };

  const increase = () => {
    setCounter((c) => c + 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className={styles.container}>
      <label className={styles.counterLabel}>{counter}</label>

      <div className={styles.buttonContainer}>
        <button className={styles.buttons} onClick={decrease}>
          Decrease
        </button>
        <button className={styles.buttons} onClick={reset}>
          Reset
        </button>
        <button className={styles.buttons} onClick={increase}>
          Increase
        </button>
      </div>
    </div>
  );
}