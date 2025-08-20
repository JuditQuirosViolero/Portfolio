import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const NavComp = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Sobre mí', path: '/' },
    { name: 'Proyecto', path: '/proyecto' },
    { name: 'Habilidades', path: '/habilidades' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <div className="navbar-container nav nav-underline p-3">
      {navItems.map((item, index) => (
        <div key={index} className="nav-item">
          <Link
            to={item.path}
            className={`App-link nav-link ${location.pathname === item.path ? 'active fs-4' : ''}`}
          >
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
};
