import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskList from './TaskList';
import Login from './Login';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/:userId" element={<TaskList />}/> 
            </Routes>
        </BrowserRouter>
    )
}

export default App;