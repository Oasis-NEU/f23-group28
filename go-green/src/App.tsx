import React from 'react';
import './App.css';
import { supabase } from "./supabase";
import { useState, useEffect } from "react";

function App() {


  const [tasks, setTasks] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
      // our fetch function
      
      const currentTaskJSON: number[] = [];

      async function fetchUser() {
        const {data, error} = await supabase.from("User Info").select("*");

        if (data) {
            const todayDate = new Date();
            var targetIndex = -1;
            for (let i = 0; i < data.length; i++) {
                if (data[i].username === "Christianfitz") {
                    targetIndex = i;
                    break;
                }
            }
            if (targetIndex === -1) {
                console.log("Username not found in test function.");
            } else {
                const lastDateString = data[targetIndex].day_last_accessed;
                //console.log(lastDateString);
                const lastDate = new Date(lastDateString);
                lastDate.setDate(lastDate.getDate());

                //console.log(lastDate.toLocaleString());
                //console.log(todayDate.toLocaleString());

                //console.log(todayDate.getDate() + " and " + lastDate.getDate())
                //console.log(todayDate.getMonth() + " and " + lastDate.getMonth())
                //console.log(todayDate.getFullYear() + " and " + lastDate.getFullYear())

                if (todayDate.getDate() === lastDate.getDate() && todayDate.getMonth() === lastDate.getMonth() && todayDate.getFullYear() === lastDate.getFullYear()) {
                    //console.log("date was found to match");
                    // fetch tasks that are already there
                    const taskNumbers = data[targetIndex].current_tasks;
                    fetchGivenTasks(taskNumbers);
                } else {
                    //console.log("date was found not to match.");
                    fetchRandomTasks();
                    // set last accessed day for this user to today
                    const currentDayString = todayDate.getFullYear() + "-" + (todayDate.getMonth()+1) + "-" + todayDate.getDate();
                    const { error } = await supabase.from('User Info').update({day_last_accessed: currentDayString}).eq('username', "Christianfitz");
                    // record the current task list as their current tasks for today
                    console.log("updating task numbers: " + currentTaskJSON);
                    await supabase.from("User Info").update({current_tasks: currentTaskJSON}).eq('username', "Christianfitz");
                    // set their completed tasks to be empty
                    await supabase.from("User Info").update({completed_tasks: []}).eq('username', "Christianfitz");
                }
            }
        } else {
            console.log(error);
        }
      }
      
      async function fetchGivenTasks(taskNumbers: any[]) {
        const {data, error} = await supabase.from("Task List").select("*");
        if (data) {
            const taskSubset = [];

            for (let i = 0; i < taskNumbers.length; i++) {
                taskSubset.push(data[taskNumbers[i]]);
            }

            setTasks(taskSubset);
        } else {
            console.log(error);
        }
      }

      async function fetchRandomTasks() {
          const {data, error} = await supabase.from("Task List").select("*");
          if (data) {
              const tasksSubset = [];
              const usedIndexes = [];
              while (tasksSubset.length < 5) {
                  const randomIndex = Math.floor(Math.random() * data.length);
                  if (usedIndexes.indexOf(randomIndex) === -1) {
                      tasksSubset.push(data[randomIndex]);
                      usedIndexes.push(randomIndex);
                      currentTaskJSON.push(randomIndex);
                      console.log("item pushed");
                      console.log(currentTaskJSON);
                  }
              }
              setTasks(tasksSubset);
          } else {
              console.log(error);
          }
      }

      fetchUser();
  }, []); // on the first page load

  return (
      <div>
          <h1>Task List</h1>
          <ul>
              {tasks ? (
                  tasks.map((task) => {
                      return (
                          //<li key={tasks.name}></li>
                          <li key={task.Index}>{task.Name}: {task.Description} = +{task.Points} Points</li>
                      )
                  })) : (
                      <p>Loading...</p>
                  )
              }
          </ul>
      </div>
  )
}

export default App;