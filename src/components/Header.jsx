//Header.jsx
import { useAppContext } from "../context/AppContext";

function Header() {
  const { darkMode, toggleDarkMode } = useAppContext();

  return (
    <header>
      <div className="header-content">
        <h1>Peliculas React 😊</h1>
        <p className="header-subtitle">
          Explora miles de películas populares y búscalas por título.
        </p>
      </div>
      <button onClick={toggleDarkMode} className="toggle-dark">
        {darkMode ? "☀️" : "🌙"}
      </button>
    </header>
  );
}

export default Header;
