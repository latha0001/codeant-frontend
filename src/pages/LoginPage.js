import React from 'react';
import DesktopVersion from '../components/LoginScreen/DesktopVersion';
import MobileVersion from '../components/LoginScreen/MobileVersion';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import './styles.css';

const LoginPage = () => {
  return (
    <div>
      <Header />
      <div className="page-container">
        <DesktopVersion />
        <MobileVersion />
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
