import { useState, useEffect } from 'react';
import './ThemeToggle.css';
import { MoonStar, SunMedium } from 'lucide-react';

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="neo-toggle-container">
      <input
        className="neo-toggle-input"
        id="neo-toggle"
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <label className="neo-toggle" htmlFor="neo-toggle">
        <div className="neo-track">
          <div className="neo-background-layer"></div>
          <div className="neo-grid-layer"></div>
          <div className="neo-spectrum-analyzer">
            <div className="neo-spectrum-bar"></div>
            <div className="neo-spectrum-bar"></div>
            <div className="neo-spectrum-bar"></div>
            <div className="neo-spectrum-bar"></div>
            <div className="neo-spectrum-bar"></div>
          </div>
          <div className="neo-track-highlight"></div>
        </div>

        <div className="neo-thumb">
          <div className="neo-thumb-ring"></div>
          <div className="neo-thumb-core">
            <div className="neo-thumb-icon">
              {isDarkMode ? <SunMedium size={12} /> : <MoonStar size={12} />}
            </div>
          </div>
        </div>

        <div className="neo-gesture-area"></div>

        <div className="neo-interaction-feedback">
          <div className="neo-ripple"></div>
          <div className="neo-progress-arc"></div>
        </div>

        <div className="neo-status">
          <div className="neo-status-indicator">
            <div className="neo-status-dot"></div>
            <div className="neo-status-text"></div>
          </div>
        </div>
      </label>
    </div>
  );
}