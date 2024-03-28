import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';
import Project from './Project';
import Work from './Work';
import NoPage from './NoPage'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="blogs" element={<Blog />} />
      <Route path="projects" element={<Project />} />
      <Route path="work" element={<Work />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App