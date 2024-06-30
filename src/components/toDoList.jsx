"use client";

import React, { useState } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState(["Walk Dog", "Go to work"]);

  function addTask() {
    const newTask = document.getElementById("task-input").value;

    if (newTask !== "") {
      document.getElementById("task-input").value = "";
      setTasks((t) => [...t, newTask]);
    }
  }

  function deleteTask(index) {
    const newTask = tasks.filter((task, i) => i !== index);
    setTasks(newTask);
  }

  function moveTaskUp(index) {
    if (index !== 0) {
      setTasks((t) => {
        const newTask = [...t];
        [newTask[index], newTask[index - 1]] = [
          newTask[index - 1],
          newTask[index],
        ];
        return newTask;
      });
    }
  }

  function moveTaskDown(index) {
    if (index !== tasks.length - 1) {
      setTasks((t) => {
        const newTask = [...t];
        [newTask[index], newTask[index + 1]] = [
          newTask[index + 1],
          newTask[index],
        ];
        return newTask;
      });
    }
  }

  return (
    <div className="bg-[#5c5c5c] py-16 rounded-xl">
      <div className="md:mx-28 flex flex-col justify-center items-center gap-10 border-2 py-36 px-16 rounded-xl shadow-xl bg-white">
        <h1 className="font-extrabold text-5xl text-gray-900">To Do List</h1>
        <div className="flex flex-row gap-10">
          <input
            id="task-input"
            type="text"
            placeholder="Enter task"
            className="border-2 rounded-xl p-4 font-semibold text-gray-900 text-lg shadow-md"
          />
          <button
            onClick={addTask}
            className="border-2 rounded-xl p-4 px-8 font-bold text-gray-700 text-lg shadow-md"
          >
            Add
          </button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex flex-col gap-4 m-4 border-2 p-4 rounded-xl shadow-md"
            >
              <span className="bg-gray-200 border-2 rounded-lg p-4 font-semibold text-gray-900 text-lg">
                {task}
              </span>
              <div className="flex flex-row gap-4">
                <button
                  onClick={() => deleteTask(index)}
                  className="bg-red-500 rounded-lg p-2 font-semibold text-white text-lg min-w-24"
                >
                  Delete
                </button>
                <button
                  onClick={() => moveTaskUp(index)}
                  className="bg-gray-400 rounded-lg p-2 font-semibold text-white text-lg min-w-24"
                >
                  &#x25B2;
                </button>
                <button
                  onClick={() => moveTaskDown(index)}
                  className="bg-green-400 rounded-lg p-2 font-semibold text-white text-lg min-w-24"
                >
                  &#x25BC;
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}