import React from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import { Link, Routes, Route } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

import Home from './pages/Home';
import About from './pages/About';
import EducationBarChart from './components/EducationBarChart';
import EducationLineChart from './components/EducationLineChart';

function App() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-title">{t('title')}</div>
        <div className="navbar-controls">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <FaHome /> Home
          </Link>
          <a href="#charts" className="nav-link">Charts</a>
          <Link to="/about" className="nav-link">About</Link>
          <select
            onChange={handleLanguageChange}
            defaultValue={i18n.language}
            className="language-select"
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
        </div>
      </nav>

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <p>{t('description')}</p>
        <div id="charts">
          <EducationBarChart />
          <EducationLineChart />
        </div>
      </div>
    </div>
  );
}

export default App;
