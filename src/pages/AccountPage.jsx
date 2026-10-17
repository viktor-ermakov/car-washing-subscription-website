// src/pages/AccountPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import AccountLayout from '../layouts/AccountLayout';

const AccountPage = () => {
  const navigate = useNavigate();
  const [user] = useState(() => {
    const defaultUser = {
      name: 'João da Silva',
      email: 'joao@example.com',
      plan: 'Plus',
      status: 'Ativa',
    };
    try {
      const stored = localStorage.getItem('currentUser');
      return stored ? { ...defaultUser, ...JSON.parse(stored) } : defaultUser;
    } catch {
      return defaultUser;
    }
  });
  const [scheduledMessage, setScheduledMessage] = useState(null);

  const handleSchedule = () => {
    setScheduledMessage('Lavagem agendada com sucesso para amanhã às 10:00 na Unidade Central!');
    setTimeout(() => {
      setScheduledMessage(null);
    }, 4000);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <AccountLayout>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px 0' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '15px',
            marginBottom: '30px',
            borderBottom: '1px solid #333',
            paddingBottom: '20px',
          }}
        >
          <div>
            <h2 style={{ margin: '0 0 6px 0', color: '#ffffff' }}>
              Painel do Assinante
            </h2>
            <p style={{ margin: 0, color: '#aaaaaa' }}>
              Olá, <strong>{user.name}</strong> ({user.email})
            </p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Button variant="secondary" onClick={() => navigate('/')}>
              Início
            </Button>
            <Button variant="danger" onClick={handleLogout}>
              Sair
            </Button>
          </div>
        </div>

        {scheduledMessage && (
          <div
            style={{
              padding: '12px 16px',
              borderRadius: '8px',
              backgroundColor: 'rgba(95, 207, 128, 0.2)',
              color: 'var(--accent-color)',
              border: '1px solid var(--accent-color)',
              marginBottom: '25px',
            }}
          >
            ✓ {scheduledMessage}
          </div>
        )}

        {/* Status Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            marginBottom: '30px',
          }}
        >
          <div
            style={{
              backgroundColor: '#1e1e1e',
              border: '1px solid #333',
              borderRadius: '10px',
              padding: '20px',
            }}
          >
            <span style={{ fontSize: '13px', color: '#888' }}>PLANO ATUAL</span>
            <h3 style={{ margin: '8px 0 0', color: 'var(--accent-color)', fontSize: '24px' }}>
              Plano {user.plan || 'Plus'}
            </h3>
            <p style={{ margin: '6px 0 0', fontSize: '13px', color: '#bbb' }}>
              Status: <span style={{ color: user.status === 'Cancelada' ? '#ff6b6b' : 'var(--accent-color)', fontWeight: 'bold' }}>{user.status || 'Ativa'}</span>
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#1e1e1e',
              border: '1px solid #333',
              borderRadius: '10px',
              padding: '20px',
            }}
          >
            <span style={{ fontSize: '13px', color: '#888' }}>LAVAGENS DISPONÍVEIS</span>
            <h3 style={{ margin: '8px 0 0', color: '#ffffff', fontSize: '24px' }}>
              3 de 4 restantes
            </h3>
            <p style={{ margin: '6px 0 0', fontSize: '13px', color: '#bbb' }}>
              Renovação em 14 dias
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#1e1e1e',
              border: '1px solid #333',
              borderRadius: '10px',
              padding: '20px',
            }}
          >
            <span style={{ fontSize: '13px', color: '#888' }}>PRÓXIMA AÇÃO</span>
            <div style={{ marginTop: '10px' }}>
              <Button
                variant="primary"
                onClick={handleSchedule}
                style={{ width: '100%', padding: '8px', fontSize: '14px' }}
              >
                Agendar Lavagem
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Action Buttons */}
        <div
          style={{
            backgroundColor: '#1e1e1e',
            border: '1px solid #333',
            borderRadius: '10px',
            padding: '25px',
          }}
        >
          <h3 style={{ margin: '0 0 15px 0', color: '#ffffff', fontSize: '18px' }}>
            Gerenciamento da Conta
          </h3>
          <p style={{ color: '#aaaaaa', fontSize: '14px', marginBottom: '20px' }}>
            Acesse os detalhes da sua assinatura atual ou atualize seus dados de cadastro e segurança.
          </p>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <Button
              variant="primary"
              onClick={() => navigate('/account/subscription')}
              style={{ padding: '12px 24px' }}
            >
              Minha assinatura
            </Button>
            <Button
              variant="secondary"
              onClick={() => navigate('/account/settings')}
              style={{ padding: '12px 24px' }}
            >
              Configurações da conta
            </Button>
          </div>
        </div>
      </div>
    </AccountLayout>
  );
};

export default AccountPage;