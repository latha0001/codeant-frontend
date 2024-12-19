import React, { useState } from 'react';
import './styles.css';

const DesktopVersion = () => {
  const [showLoginOptions, setShowLoginOptions] = useState(false);
  const [showSelfHostedOptions, setShowSelfHostedOptions] = useState(false);

  // Handle "SAAS" button click
  const handleSaasClick = () => {
    setShowLoginOptions(true); // Show SAAS login options
    setShowSelfHostedOptions(false); // Hide self-hosted options
  };

  // Handle "Self Hosted" button click
  const handleSelfHostedClick = () => {
    setShowSelfHostedOptions(true); // Show self-hosted login options
    setShowLoginOptions(false); // Hide SAAS options
  };

  return (
    <div className="desktop-container">
      {/* Left Section: AI Features and Statistics */}
      <div className="left-section">
        <h2>AI to Detect & Autofix Bad Code</h2>
        <ul className="stats-list">
          <li>
            <strong>30+</strong> Language Support
          </li>
          <li>
            <strong>10K+</strong> Developers
          </li>
          <li>
            <strong>100K+</strong> Hours Saved
          </li>
          <li>
            <strong>14%</strong> This week Issues Fixed
          </li>
          <li>
            <strong>500K+</strong> Total Issues Fixed
          </li>
        </ul>
      </div>

      {/* Right Section: Login Options */}
      <div className="right-section">
        <h1>Welcome to CodeAnt AI</h1>
        {!showLoginOptions && !showSelfHostedOptions ? (
          <div className="login-options">
            <button className="login-btn" onClick={handleSaasClick}>
              SAAS
            </button>
            <button className="login-btn" onClick={handleSelfHostedClick}>
              Self Hosted
            </button>
          </div>
        ) : showLoginOptions ? (
          <div className="saas-login-options">
            <button className="login-option-btn">Login with Google</button>
            <br />
            <button className="login-option-btn">Login with GitHub</button>
            <br />
            <button className="login-option-btn">Login with GitLab</button>
          </div>
        ) : (
          <div className="self-hosted-options">
            <button className="login-option-btn">Login with Self-Hosted GitLab</button>
            <br />
            <button className="login-option-btn">Sign in with SSO</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesktopVersion;
