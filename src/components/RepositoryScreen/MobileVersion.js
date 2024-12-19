import React, { useState } from 'react';
import './styles.css';

const MobileVersion = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="mobile-container">
      {/* Top Corner: CodeAnt AI Label */}
      <button className="top-corner-label" onClick={() => alert('CodeAnt AI')}>
        CodeAnt AI
      </button>

      {/* Right Corner: Three-Line (Hamburger) Menu */}
      <button className="hamburger-menu" onClick={toggleMenu}>
        &#9776; {/* Unicode for the hamburger icon (three lines) */}
      </button>

      {/* Sidebar Menu */}
      {isMenuVisible && (
        <div className="sidebar">
          <button className="sidebar-item" onClick={() => alert('Search')}>
            Search
          </button><br></br>
          <button className="sidebar-item" onClick={() => alert('Kadavath Latha')}>
            Kadavath Latha
          </button><br></br>
          <button className="sidebar-item" onClick={() => alert('Share link')}>
            Share link
          </button><br></br>
          <button className="sidebar-item" onClick={() => alert('Repositories')}>
            Repositories
          </button><br></br>
          <button className="sidebar-item" onClick={() => alert('Cloud Security')}>
            Cloud Security
          </button><br></br>
          <button className="sidebar-item" onClick={() => alert('How to Use')}>
            How to Use
          </button><br></br>
          <button className="sidebar-item" onClick={() => alert('Settings')}>
            Settings
          </button><br></br>
          <button className="sidebar-item" onClick={() => alert('Support')}>
            Support
          </button><br></br>
          <button className="sidebar-item" onClick={() => alert('Logout')}>
            Logout
          </button>
        </div>
      )}

      {/* Repository Section */}
      <div className="repository-container mobile">
        <h1>Your Repositories</h1>
        <ul>
          <li>Analytics Dashboard</li>
          <li>E-commerce Platform</li>
          <li>Blog Website</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileVersion;
