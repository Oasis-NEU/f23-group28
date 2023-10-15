import React from 'react';
import logo from './logo.svg';
import './App.css';
import { supabase } from "./supabase";
import { useState, useEffect } from "react";

function App() {


  const [tasks, setTasks] = useState([]);

  useEffect(() => {
      // our fetch function
      async function fetchTasks() {
          const {data, error} = await supabase.from("Task List").select("*");
          if (data) {
              const tasksSubset = [];
              const usedIndexes = [];
              while (tasksSubset.length < 5) {
                  const randomIndex = Math.floor(Math.random() * data.length);
                  if (usedIndexes.indexOf(randomIndex) == -1) {
                      tasksSubset.push(data[randomIndex]);
                      usedIndexes.push(randomIndex);
                  }
              }
              setTasks(tasksSubset);
          } else {
              console.log(error);
          }
      }

      fetchTasks();
  }, []); // on the first page load

  return (
      <div>
          <h1>Task List</h1>
          <ul>
              {tasks ? (
                  tasks.map((tasks) => {
                      return (
                          //<li key={tasks.name}></li>
                          <li key={tasks.Index}>{tasks.Name}: {tasks.Description} = +{tasks.Points} Points</li>
                      )
                  })) : (
                      <p>Loading...</p>
                  )
              }
          </ul>
      </div>
  )

  //return <p>App</p>;


  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src="./GoGreenLogo.png" alt="GoGreen Logo"/>
        <p>
          Enter your username, or enter a new one.
        </p>
        <input type="text" name="UsernameInput" size={30} required></input>
        <button type="button" name="test">Enter Your Garden</button>
        <p>
          Invalid username.
        </p>
      </header>
    </div>
  );
  */
}

export default App;
