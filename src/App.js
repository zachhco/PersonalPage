import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import { ProjectsProvider } from './context/ProjectsContext';
import SeatbeltProject from './pages/ProjectPages/SeatbeltProject';
import NGOProject from './pages/ProjectPages/NGOProject';

function App() {
  // Only use basename in production (GitHub Pages)
  const basename = process.env.NODE_ENV === 'production' ? '/PersonalPage' : '';

  return (
    <ProjectsProvider>
      <Router basename={basename}>
        <Layout>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/seatbelt" element={<SeatbeltProject />} />
            <Route path="/projects/ngo" element={<NGOProject />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
        <Footer />
      </Router>
    </ProjectsProvider>
  );
}

export default App;
