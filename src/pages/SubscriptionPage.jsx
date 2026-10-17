// src/pages/SubscriptionPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountLayout from '../layouts/AccountLayout';
import Button from '../components/Button';

const planDetails = {
  Básico: {
    price: 'R$ 79,90',
    features: [
      '2 lavagens externas por mês',
      'Limpeza de vidros e espelhos',
      'Aplicação de pretinho nos pneus',
      'Desconto de 10% em serviços extras',
    ],
  },
  Plus: {
    price: 'R$ 149,90',
    features: [
      '4 lavagens externas por mês',
      '1 lavagem completa por mês',
      'Agendamento prioritário',
      'Higienização interna básica',
      'Desconto de 20% em serviços extras',
    ],
  },
  Premium: {
    price: 'R$ 249,90',
    features: [
      'Lavagens externas ilimitadas (1x/semana)',
      '2 lavagens completas detalhadas por mês',
      'Higienização profunda de estofados',
      'Cristalização de para-brisa',
      'Atendimento VIP prioritário',
    ],
  },
};

const SubscriptionPage = () => {
  const navigate = useNavigate();
  const [currentPlan, setCurrentPlan] = useState(() => {
    try {
      const stored = localStorage.getItem('currentUser');
      return stored ? JSON.parse(stored).plan || 'Plus' : 'Plus';
    } catch {
      return 'Plus';
    }
  });
  const [status, setStatus] = useState(() => {
    try {
      const stored = localStorage.getItem('currentUser');
      return stored ? JSON.parse(stored).status || 'Ativa' : 'Ativa';
    } catch {
      return 'Ativa';
    }
  });
  const [showPlanModal, setShowPlanModal] = useState(false);
  const [notification, setNotification] = useState(null);

  const saveUserUpdate = (updatedPlan, updatedStatus) => {
    try {
      const stored = localStorage.getItem('currentUser');
      const current = stored ? JSON.parse(stored) : {};
      const updated = {
        ...current,
        plan: updatedPlan !== undefined ? updatedPlan : currentPlan,
        status: updatedStatus !== undefined ? updatedStatus : status,
      };
      localStorage.setItem('currentUser', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleCancelSubscription = () => {
    if (status === 'Ativa') {
      const confirmCancel = window.confirm(
        'Tem certeza que deseja cancelar sua assinatura? Os benefícios continuarão ativos até o fim do ciclo atual.'
      );
      if (confirmCancel) {
        setStatus('Cancelada');
        saveUserUpdate(currentPlan, 'Cancelada');
        setNotification({
          type: 'info',
          text: 'Assinatura cancelada com sucesso. Você não receberá novas cobranças.',
        });
      }
    } else {
      setStatus('Ativa');
      saveUserUpdate(currentPlan, 'Ativa');
      setNotification({
        type: 'success',
        text: 'Assinatura reativada com sucesso! Bem-vindo de volta.',
      });
    }
  };

  const handleChangePlan = (newPlan) => {
    setCurrentPlan(newPlan);
    setShowPlanModal(false);
    saveUserUpdate(newPlan, status);
    setNotification({
      type: 'success',
      text: `Plano alterado para ${newPlan} com sucesso!`,
    });
  };

  const currentDetails = planDetails[currentPlan] || planDetails['Plus'];

  return (
    <AccountLayout>
      <div style={{ maxWidth: '750px', margin: '20px auto', padding: '0 10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
          <h2 style={{ color: '#ffffff', margin: 0 }}>Detalhes da Assinatura</h2>
          <Button variant="secondary" onClick={() => navigate('/account')}>
            ← Voltar ao Painel
          </Button>
        </div>

        {notification && (
          <div
            style={{
              padding: '12px 16px',
              borderRadius: '8px',
              marginBottom: '20px',
              fontSize: '14px',
              backgroundColor: notification.type === 'success' ? 'rgba(95, 207, 128, 0.2)' : 'rgba(255, 193, 7, 0.2)',
              color: notification.type === 'success' ? 'var(--accent-color)' : '#ffc107',
              border: `1px solid ${notification.type === 'success' ? 'var(--accent-color)' : '#ffc107'}`,
            }}
          >
            {notification.text}
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              borderBottom: '1px solid #333',
              paddingBottom: '20px',
              marginBottom: '20px',
              flexWrap: 'wrap',
              gap: '15px',
            }}
          >
            <div>
              <span style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase' }}>Seu plano</span>
              <h3 style={{ fontSize: '28px', color: 'var(--accent-color)', margin: '4px 0' }}>
                Plano {currentPlan}
              </h3>
              <p style={{ margin: 0, color: '#dddddd', fontSize: '18px', fontWeight: 'bold' }}>
                {currentDetails.price} <span style={{ fontSize: '13px', color: '#888', fontWeight: 'normal' }}>/mês</span>
              </p>
            </div>
            <div>
              <span
                style={{
                  display: 'inline-block',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  backgroundColor: status === 'Ativa' ? 'rgba(95, 207, 128, 0.2)' : 'rgba(220, 53, 69, 0.2)',
                  color: status === 'Ativa' ? 'var(--accent-color)' : '#ff6b6b',
                  border: `1px solid ${status === 'Ativa' ? 'var(--accent-color)' : '#dc3545'}`,
                }}
              >
                Status: {status}
              </span>
            </div>
          </div>

          <div style={{ marginBottom: '25px' }}>
            <h4 style={{ color: '#ffffff', margin: '0 0 12px 0', fontSize: '16px' }}>Serviços incluídos:</h4>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {currentDetails.features.map((feature, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ccc', fontSize: '14px' }}>
                  <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '15px',
              padding: '15px',
              backgroundColor: '#161616',
              borderRadius: '8px',
              marginBottom: '30px',
            }}
          >
            <div>
              <span style={{ fontSize: '12px', color: '#888' }}>Data de Início</span>
              <p style={{ margin: '4px 0 0', color: '#fff', fontSize: '14px' }}>01/09/2023</p>
            </div>
            <div>
              <span style={{ fontSize: '12px', color: '#888' }}>Próxima Renovação</span>
              <p style={{ margin: '4px 0 0', color: '#fff', fontSize: '14px' }}>
                {status === 'Ativa' ? '01/11/2026' : 'Cancelada (sem cobrança)'}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button variant="primary" onClick={() => setShowPlanModal(true)}>
              Alterar plano
            </Button>
            <Button
              variant={status === 'Ativa' ? 'danger' : 'primary'}
              onClick={handleCancelSubscription}
            >
              {status === 'Ativa' ? 'Cancelar assinatura' : 'Reativar assinatura'}
            </Button>
          </div>
        </div>

        {/* Modal to choose alternative plan */}
        {showPlanModal && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.75)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: '20px',
            }}
          >
            <div
              style={{
                backgroundColor: '#1e1e1e',
                borderRadius: '12px',
                border: '1px solid #444',
                padding: '30px',
                maxWidth: '500px',
                width: '100%',
              }}
            >
              <h3 style={{ color: '#ffffff', marginTop: 0 }}>Selecione um Novo Plano</h3>
              <p style={{ color: '#888', fontSize: '14px', marginBottom: '20px' }}>
                A alteração entra em vigor imediatamente para seus próximos agendamentos.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '25px' }}>
                {Object.keys(planDetails).map((planKey) => (
                  <button
                    key={planKey}
                    onClick={() => handleChangePlan(planKey)}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '14px 18px',
                      backgroundColor: currentPlan === planKey ? 'rgba(95, 207, 128, 0.15)' : '#282828',
                      border: currentPlan === planKey ? '2px solid var(--accent-color)' : '1px solid #3d3d3d',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      color: '#ffffff',
                      textAlign: 'left',
                    }}
                  >
                    <div>
                      <strong style={{ fontSize: '16px', display: 'block' }}>Plano {planKey}</strong>
                      <span style={{ fontSize: '13px', color: '#aaaaaa' }}>{planDetails[planKey].price}/mês</span>
                    </div>
                    {currentPlan === planKey ? (
                      <span style={{ color: 'var(--accent-color)', fontSize: '13px', fontWeight: 'bold' }}>Plano Atual</span>
                    ) : (
                      <span style={{ color: 'var(--primary-color)', fontSize: '13px' }}>Selecionar →</span>
                    )}
                  </button>
                ))}
              </div>

              <div style={{ textAlign: 'right' }}>
                <Button variant="secondary" onClick={() => setShowPlanModal(false)}>
                  Fechar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AccountLayout>
  );
};

export default SubscriptionPage;