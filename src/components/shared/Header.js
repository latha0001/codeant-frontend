import React from 'react';
import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <h1>CodeAnt AI</h1>
      <nav>
        <a href="/">Login</a>
        <a href="/repositories">Repositories</a>
      </nav>
    </header>
  );
};

export default Header;
