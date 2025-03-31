import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Homepage.js"
import Courses from "./data/courses.js"
//import Login from "./data/login.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
