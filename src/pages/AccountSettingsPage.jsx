// src/pages/AccountSettingsPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountLayout from '../layouts/AccountLayout';
import Button from '../components/Button';

const AccountSettingsPage = () => {
  const navigate = useNavigate();
  const getInitialUser = () => {
    try {
      const stored = localStorage.getItem('currentUser');
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  };

  const initialUser = getInitialUser();
  const [name, setName] = useState(() => initialUser.name || 'João da Silva');
  const [email, setEmail] = useState(() => initialUser.email || 'joao@example.com');
  const [phone, setPhone] = useState(() => initialUser.phone || '(11) 98765-4321');
  const [plate, setPlate] = useState(() => initialUser.plate || 'BRA-2E19');
  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const stored = localStorage.getItem('currentUser');
      const current = stored ? JSON.parse(stored) : {};
      const updated = {
        ...current,
        name,
        email,
        phone,
        plate,
      };
      localStorage.setItem('currentUser', JSON.stringify(updated));
      setMessage({ type: 'success', text: 'Alterações salvas com sucesso!' });
      setTimeout(() => {
        setMessage(null);
      }, 4000);
    } catch {
      setMessage({ type: 'error', text: 'Erro ao salvar alterações.' });
    }
  };

  return (
    <AccountLayout>
      <div style={{ padding: '20px', maxWidth: '550px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
          <h2 style={{ color: '#ffffff', margin: 0 }}>Configurações da Conta</h2>
          <Button variant="secondary" onClick={() => navigate('/account')}>
            ← Voltar ao Painel
          </Button>
        </div>

        {message && (
          <div
            style={{
              padding: '12px 16px',
              borderRadius: '8px',
              marginBottom: '20px',
              fontSize: '14px',
              backgroundColor: message.type === 'success' ? 'rgba(95, 207, 128, 0.2)' : 'rgba(220, 53, 69, 0.2)',
              color: message.type === 'success' ? 'var(--accent-color)' : '#ff6b6b',
              border: `1px solid ${message.type === 'success' ? 'var(--accent-color)' : '#dc3545'}`,
            }}
          >
            ✓ {message.text}
          </div>
        )}

        <div
          style={{
            backgroundColor: '#1e1e1e',
            borderRadius: '12px',
            border: '1px solid #333',
            padding: '30px',
          }}
        >
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '18px' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', color: '#dddddd', fontSize: '14px' }}>
                Nome Completo
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{
                  padding: '10px 12px',
                  width: '100%',
                  boxSizing: 'border-box',
                  border: '1px solid #444',
                  backgroundColor: '#2a2a2a',
                  color: 'white',
                  borderRadius: '6px',
                  fontSize: '15px',
                }}
              />
            </div>

            <div style={{ marginBottom: '18px' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', color: '#dddddd', fontSize: '14px' }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  padding: '10px 12px',
                  width: '100%',
                  boxSizing: 'border-box',
                  border: '1px solid #444',
                  backgroundColor: '#2a2a2a',
                  color: 'white',
                  borderRadius: '6px',
                  fontSize: '15px',
                }}
              />
            </div>

            <div style={{ marginBottom: '18px' }}>
              <label htmlFor="phone" style={{ display: 'block', marginBottom: '8px', color: '#dddddd', fontSize: '14px' }}>
                Telefone / WhatsApp
              </label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  padding: '10px 12px',
                  width: '100%',
                  boxSizing: 'border-box',
                  border: '1px solid #444',
                  backgroundColor: '#2a2a2a',
                  color: 'white',
                  borderRadius: '6px',
                  fontSize: '15px',
                }}
              />
            </div>

            <div style={{ marginBottom: '28px' }}>
              <label htmlFor="plate" style={{ display: 'block', marginBottom: '8px', color: '#dddddd', fontSize: '14px' }}>
                Placa do Veículo Principal
              </label>
              <input
                type="text"
                id="plate"
                value={plate}
                onChange={(e) => setPlate(e.target.value.toUpperCase())}
                style={{
                  padding: '10px 12px',
                  width: '100%',
                  boxSizing: 'border-box',
                  border: '1px solid #444',
                  backgroundColor: '#2a2a2a',
                  color: 'white',
                  borderRadius: '6px',
                  fontSize: '15px',
                  letterSpacing: '1px',
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <Button type="submit" variant="primary" style={{ padding: '12px 24px' }}>
                Salvar alterações
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => navigate('/account')}
                style={{ padding: '12px 20px' }}
              >
                Cancelar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </AccountLayout>
  );
};

export default AccountSettingsPage;
