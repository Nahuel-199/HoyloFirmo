import React, { useContext } from 'react';
import Login from './components/login/Login';
import Project from './components/project/Project';
import Dashboard from './components/dashboard/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DarkModeContext } from './context/darkModeContext';
import "./style/dark.scss";



function App() {

  const { darkMode } = useContext(DarkModeContext);

  return (
  <div className={darkMode ? "app dark" : "app"}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/projects' element={<Project />} />
      <Route path='/dashboard' index element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  </div>
  )
}
export default App;
