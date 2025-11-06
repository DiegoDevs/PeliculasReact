//Header.jsx
import { useAppContext } from "../context/AppContext";

function Header() {
  const { darkMode, toggleDarkMode } = useAppContext();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>Peliculas React 😊</h1>
      <button
        onClick={toggleDarkMode}
        style={{
          padding: "0.5rem 1rem",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </header>
  );
}

export default Header;
