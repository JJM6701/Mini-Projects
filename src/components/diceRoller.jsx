"use client";

import React, { useState } from "react";
import styles from "../styles/diceRoller.module.css";

export default function DiceRoller() {

  const [numberOfDice, setNumberOfDice] = useState(1);
  const [diceResult, setDiceResult] = useState([]);

  const handleNumberOfDice = (event) => {
    setNumberOfDice(event.target.value);
  };

  const handleDiceResult = () => {
    setDiceResult([]);
    const newResults = [];

    for (let i = 0; i < numberOfDice; i++) {
      const roll = Math.floor(Math.random() * 6) + 1;
      newResults.push(roll);
    }

    setDiceResult(newResults);
  };

  return (
    <div className={styles.container}>
      <p className={styles.diceResult}>{diceResult.join(", ")}</p>
      <div className={styles.inputContainer}>
        <input
          type="number"
          className={styles.numberOfDice}
          min="1"
          placeholder="Number of Dice"
          value={numberOfDice}
          onChange={(event) => handleNumberOfDice(event)}
        ></input>
        <button className={styles.button} onClick={handleDiceResult}>
          Roll Dice
        </button>
      </div>
    </div>
  );
}
