import { useState, useEffect } from 'react';

import { themes } from '../themes';

import ThemesControl from './ThemesControl';

import styles from './Settings.module.css';

function Settings() {
  const [activeTheme, setActiveTheme] = useState(themes.blue);
  const [themesVisible, setThemesVisible] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (!savedTheme) {
      return;
    }

    setActiveTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.querySelector('html').className = activeTheme;
    closeThemesVisible();
  }, [activeTheme]);

  function handleThemeChange(newTheme) {
    setActiveTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  function closeThemesVisible() {
    setThemesVisible(false);
  }

  function toggleThemesVisible() {
    setThemesVisible((prevState) => !prevState);
  }

  return (
    <div>
      {/* <div className={styles.box} /> */}

      <p className={styles.text}>Some test text</p>

      <ThemesControl
        activeTheme={activeTheme}
        onChange={handleThemeChange}
        dropdownVisible={themesVisible}
        toggleDropdown={toggleThemesVisible}
        themes={themes}
      />
    </div>
  );
}

export default Settings;
