// src/layouts/AccountLayout.jsx
import React from 'react';
import Header from '../components/Header';

const AccountLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, padding: '20px' }}>
        {children}
      </main>
    </div>
  );
};

export default AccountLayout;