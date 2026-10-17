// src/components/ServiceCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: '#1e1e1e',
        borderRadius: '12px',
        padding: '24px',
        border: '1px solid #333333',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'left',
        transition: 'transform 0.2s ease, border-color 0.2s ease',
      }}
    >
      <div>
        <div style={{ fontSize: '36px', marginBottom: '16px' }}>{service.icon}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <h3 style={{ fontSize: '18px', color: '#ffffff', margin: 0 }}>{service.title}</h3>
          {service.duration && (
            <span style={{ fontSize: '12px', color: '#888888', backgroundColor: '#2a2a2a', padding: '4px 8px', borderRadius: '4px' }}>
              ⏱️ {service.duration}
            </span>
          )}
        </div>
        <p style={{ color: '#aaaaaa', fontSize: '14px', lineHeight: '1.5', marginBottom: '20px' }}>
          {service.description}
        </p>
      </div>

      <Button
        variant="secondary"
        onClick={() => navigate('/login')}
        style={{ width: '100%', fontSize: '13px', padding: '8px 16px' }}
      >
        Disponível por Assinatura
      </Button>
    </div>
  );
};

export default ServiceCard;

