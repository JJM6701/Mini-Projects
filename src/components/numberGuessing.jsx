"use client";

import styles from "../styles/numberGuessing.module.css";
import React, { useEffect, useState } from "react";

export default function NumberGuessing() {

  const hint = document.getElementById("hint");
  const button = document.getElementById("button");

  const [answer, setAnswer] = useState(Math.floor(Math.random() * 100 + 1));
  const [guess, setGuess] = useState(1);

  const guessAnswer = () => {
    if (guess == answer) {
      hint.textContent = "You Win";
    } else if (guess < answer) {
      hint.textContent = "Higher";
    } else {
      hint.textContent = "Lower";
    }
  };

  const handleGuess = (event) => {
    setGuess(event.target.value);
  };

  useEffect(() => {
    if (guess == answer) {
      const timer = setTimeout(() => {
        hint.textContent = "Pick a Number 1-100";
        setAnswer(Math.floor(Math.random() * 100 + 1));
      }, 5000);
    }
  }, [guess]);

  return (
    <div className={styles.container}>
      <p id="hint" className={styles.hint}>
        Pick a Number 1-100
      </p>
      <input
        type="number"
        id="answer"
        className={styles.answer}
        onChange={(event) => handleGuess(event)}
        min="1"
        max="100"
      ></input>
      <button id="button" className={styles.button} onClick={guessAnswer}>
        Submit
      </button>
    </div>
  );
}
