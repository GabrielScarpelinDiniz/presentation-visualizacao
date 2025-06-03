import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="nav-header">
      <div className="nav-content">
        <div className="logo-section">
          <img
            src="/src/assets/iso_branco.svg"
            alt="Inteli Academy Logo"
            className="logo"
          />
        </div>

        <nav className="nav-links">
          <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
            🏠 Home
          </Link>
          <Link
            to="/data-visualization"
            className={`nav-link ${
              isActive("/data-visualization") ? "active" : ""
            }`}
          >
            📊 Visualização de Dados
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
