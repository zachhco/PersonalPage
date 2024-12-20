import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import FloatedZeus from './pages/FloatedZeus/FloatedZeus';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import { ProjectsProvider } from './context/ProjectsContext';
import SeatbeltProject from './pages/ProjectPages/SeatbeltProject';
import NGOProject from './pages/ProjectPages/NGOProject';

function App() {
  return (
    <ProjectsProvider>
      <Router>
        <Layout>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/seatbelt" element={<SeatbeltProject />} />
            <Route path="/projects/ngo" element={<NGOProject />} />
            <Route path="/about" element={<About />} />
            <Route path="/floatedzeus" element={<FloatedZeus />} />
          </Routes>
        </Layout>
        <Footer />
      </Router>
    </ProjectsProvider>
  );
}

export default App;
