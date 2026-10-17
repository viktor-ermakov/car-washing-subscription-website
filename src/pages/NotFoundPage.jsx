// src/pages/NotFoundPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Button from '../components/Button';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div
        style={{
          textAlign: 'center',
          padding: '80px 20px',
          maxWidth: '550px',
          margin: '0 auto',
        }}
      >
        <div style={{ fontSize: '72px', fontWeight: 'bold', color: 'var(--accent-color)', marginBottom: '10px' }}>
          404
        </div>
        <h1 style={{ color: '#ffffff', marginBottom: '16px', fontSize: '28px' }}>
          Página não encontrada
        </h1>
        <p style={{ color: '#aaaaaa', fontSize: '16px', marginBottom: '30px', lineHeight: '1.5' }}>
          A página que você está procurando não existe ou foi movida.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <Button variant="primary" onClick={() => navigate('/')} style={{ padding: '12px 24px' }}>
            Voltar para o início
          </Button>
          <Button variant="secondary" onClick={() => navigate(-1)} style={{ padding: '12px 24px' }}>
            Página anterior
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFoundPage;