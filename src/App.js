import React from 'react'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from './components/Home';
import Blog from './components/Blog';
import Project from './components/Project';
import Work from './components/Work';
import NoPage from './components/NoPage'
import Navbar from './components/Navbar';
import IndiaMap from './components/IndiaMap';
import StatePage from './components/StatePage';

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
        <Route path="/state/:stateName" element={<StatePageWrapper />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

// Wrapper to pass route params to StatePage
const StatePageWrapper = () => {
  const { stateName } = useParams();
  return <StatePage stateName={stateName} />;
};

export default App