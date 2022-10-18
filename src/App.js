import './styles/base.css';
import HomePage from './pages/home-page/index.js';
import NotFoundPage from './pages/not-found/index.js';
import ProjectDetailPage from './pages/project-detail';
import AboutUsPage from './pages/about-us';
import ContactPage from './pages/contact';
import { Route, Routes } from "react-router-dom";
// Default theme
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/:category" element={<HomePage/>} />
        <Route exact path="/project/:name" element={<ProjectDetailPage/>} />
        <Route exact path="/about-us" element={<AboutUsPage />} /> 
        <Route exact path="/contact" element={<ContactPage />} /> 
        <Route exact path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
