import React, { useState } from 'react';
import './styles.css';

const MobileVersion = () => {
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
    <div className="centered-container">
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

export default MobileVersion;
