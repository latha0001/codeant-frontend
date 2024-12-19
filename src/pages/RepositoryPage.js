import React from 'react';
import DesktopVersion from '../components/RepositoryScreen/DesktopVersion';
import MobileVersion from '../components/RepositoryScreen/MobileVersion';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import './styles.css';

const RepositoryPage = () => {
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

export default RepositoryPage;
