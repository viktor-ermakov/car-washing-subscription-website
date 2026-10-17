// src/components/PlanCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const PlanCard = ({ plan, onSelect }) => {
  const navigate = useNavigate();

  const handleSelect = () => {
    if (onSelect) {
      onSelect(plan);
    } else {
      navigate(`/register?plan=${plan.id}`);
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#1e1e1e',
        borderRadius: '12px',
        padding: '30px 24px',
        border: plan.popular ? '2px solid var(--accent-color)' : '1px solid #333333',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        boxShadow: plan.popular ? '0 8px 24px rgba(95, 207, 128, 0.15)' : 'none',
        transition: 'transform 0.2s ease, border-color 0.2s ease',
      }}
    >
      {plan.popular && (
        <span
          style={{
            position: 'absolute',
            top: '-13px',
            right: '24px',
            backgroundColor: 'var(--accent-color)',
            color: '#121212',
            fontSize: '12px',
            fontWeight: 'bold',
            padding: '4px 12px',
            borderRadius: '20px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          Mais Popular
        </span>
      )}

      <div>
        <h3 style={{ fontSize: '22px', marginBottom: '8px', color: '#ffffff' }}>
          {plan.name}
        </h3>
        <p style={{ color: '#aaaaaa', fontSize: '14px', minHeight: '40px', marginBottom: '20px' }}>
          {plan.description}
        </p>

        <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'baseline', gap: '4px' }}>
          <span style={{ fontSize: '32px', fontWeight: 'bold', color: 'var(--accent-color)' }}>
            {plan.price}
          </span>
          <span style={{ color: '#888888', fontSize: '14px' }}>{plan.period}</span>
        </div>

        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {plan.features.map((feature, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#dddddd' }}>
              <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button
        onClick={handleSelect}
        variant={plan.popular ? 'primary' : 'outline'}
        style={{ width: '100%', padding: '12px', textAlign: 'center' }}
      >
        {plan.ctaText || 'Assinar Plano'}
      </Button>
    </div>
  );
};

export default PlanCard;

