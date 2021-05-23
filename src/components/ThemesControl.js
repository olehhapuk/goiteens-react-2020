import styles from './Settings.module.css';

import dropdownArrowIcon from '../assets/icons/dropdown_arrow.svg';

function ThemesControl({
  activeTheme,
  themes,
  onChange,
  toggleDropdown,
  dropdownVisible,
}) {
  return (
    <div className={styles.themeControl}>
      <div className={styles.themePlaceholder}>
        <div className={styles[activeTheme]} />

        <button
          type="button"
          className={styles.themeDropdownBtn}
          onClick={toggleDropdown}
        >
          <img src={dropdownArrowIcon} alt="Open themes dropdown" />
        </button>
      </div>

      {dropdownVisible && (
        <ul className={styles.themeList}>
          {Object.keys(themes)
            .filter((themeKey) => themeKey !== activeTheme)
            .map((themeKey) => (
              <li key={themeKey} value={themeKey} className={styles.themeItem}>
                <button
                  type="button"
                  className={styles[themeKey]}
                  onClick={() => onChange(themeKey)}
                />
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default ThemesControl;
