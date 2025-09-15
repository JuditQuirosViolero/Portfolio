import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const NavComp = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Sobre mí', path: '/' },
    { name: 'Proyecto', path: '/proyecto' },
    { name: 'Habilidades', path: '/habilidades' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <div className="nav-wrapper">
      {/* Botón hamburguesa solo visible en móviles */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>

      {/* Aside / menú lateral */}
      <aside className={`App-aside ${menuOpen ? 'open' : ''}`}>
        <nav className="navbar-container nav nav-underline">
          {navItems.map((item, index) => (
            <div key={index} className="nav-item">
              <Link
                to={item.path}
                className={`App-link nav-link ${location.pathname === item.path ? 'active fs-4' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
      </aside>
    </div>
  );
};