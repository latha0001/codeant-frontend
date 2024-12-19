import React, { useState } from 'react';
import './styles.css';

const Sidebar = ({ onRepoClick }) => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <button className="sidebar-button search-button">
            🔍 Search
          </button>
        </li>
        <li>
          <button className="sidebar-button account-button">
            👤 Kadavath Latha
          </button>
        </li>
        <li>
          <button className="sidebar-button" onClick={onRepoClick}>
            📁 Repositories
          </button>
        </li>
        <li>
          <button className="sidebar-button">
            🤖 AI Code Review
          </button>
        </li>
        <li>
          <button className="sidebar-button">
            ☁️ Cloud Security
          </button>
        </li>
        <li>
          <button className="sidebar-button">
            ❓ How to Use
          </button>
        </li>
      </ul>
      <div className="sidebar-bottom" style={{ position: 'absolute', bottom: '10px', left: '10px' }}>
        <button className="sidebar-button">
          🛠️ Support
        </button>
        <button className="sidebar-button">
          ⚙️ Settings
        </button>
        <button className="sidebar-button">
          🔓 Logout
        </button>
      </div>
    </div>
  );
};

const RepositoryList = ({ repositories, searchTerm, onRepoClick }) => {
  const filteredRepositories = repositories.filter(repo =>
    repo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="repository-list">
      {filteredRepositories.length === 0 ? (
        <p>No repositories found</p>
      ) : (
        <ul>
          {filteredRepositories.map((repo, index) => (
            <li key={index}>
              <button className="sidebar-button" onClick={() => onRepoClick(repo)}>
                {repo}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const DesktopVersion = () => {
  const [isRepoVisible, setIsRepoVisible] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [repositories, setRepositories] = useState([
    'Analytics Dashboard',
    'E-commerce Platform',
    'Blog Website',
  ]);

  const handleRepoClick = () => {
    setIsRepoVisible(!isRepoVisible);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRepoSelection = (repo) => {
    setSelectedRepo(repo);
  };

  const handleAddRepo = () => {
    const newRepo = prompt('Enter the new repository name:');
    if (newRepo) {
      setRepositories([...repositories, newRepo]);
    }
  };

  const handleRefreshAll = () => {
    setRepositories([
      'Analytics Dashboard',
      'E-commerce Platform',
      'Blog Website',
    ]);
    setSearchTerm('');
    setSelectedRepo(null);
    setIsRepoVisible(false);
  };

  return (
    <div className="app-container">
      <Sidebar onRepoClick={handleRepoClick} />
      <div className="top-right-buttons">
        <button className="top-right-button" onClick={handleAddRepo}>
          ➕ Add Repository
        </button>
        <button className="top-right-button" onClick={handleRefreshAll}>
          🔄 Refresh All
        </button>
      </div>
      <div className="repository-container desktop">
        <h1>Your Repositories</h1>
        {isRepoVisible && (
          <div>
            <input
              type="text"
              placeholder="Search repositories..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
            <RepositoryList
              repositories={repositories}
              searchTerm={searchTerm}
              onRepoClick={handleRepoSelection}
            />
          </div>
        )}
        {selectedRepo && (
          <div className="repository-details">
            <h2>{selectedRepo}</h2>
            <p>Details about {selectedRepo} will go here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesktopVersion;
