import './styles/base.css';
import HomePage from './pages/home-page/index.js';
import ProjectDetailPage from './pages/project-detail';
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
        <Route exact path="/project/:name" element={<ProjectDetailPage/>} />
        {/* <Route exact path="/about-us" element={<About-us />} />
        <Route exact path="/services" element={<Services />} /> */}
      </Routes>
    </div>
  );
}

export default App;
