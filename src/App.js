import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Blog from './components/Blog';
import Project from './components/Project';
import Work from './components/Work';
import NoPage from './components/NoPage'
import Navbar from './components/Navbar';
import IndiaMap from './components/IndiaMap';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="blogs" element={<Blog />} />
      <Route path="projects" element={<Project />} />
      <Route path="work" element={<Work />} />
      <Route path="travel" element={<IndiaMap />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App