// src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import Button from '../components/Button';
import MainLayout from '../layouts/MainLayout';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(() => searchParams.get('plan') || 'plus');
  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) return;

    const userObj = {
      name,
      email,
      plan: selectedPlan === 'basic' ? 'Básico' : selectedPlan === 'premium' ? 'Premium' : 'Plus',
      status: 'Ativa',
    };
    localStorage.setItem('currentUser', JSON.stringify(userObj));

    setMessage({ type: 'success', text: 'Conta criada com sucesso! Acessando sua área...' });
    setTimeout(() => {
      navigate('/account');
    }, 600);
  };

  const fillDemoData = () => {
    setName('Carlos Eduardo');
    setEmail('carlos@example.com');
    setPassword('senha123');
  };

  return (
    <MainLayout>
      <div
        style={{
          maxWidth: '440px',
          margin: '40px auto',
          padding: '30px',
          border: '1px solid #333',
          borderRadius: '12px',
          backgroundColor: '#1e1e1e',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
        }}
      >
        <h2 style={{ color: '#ffffff', marginTop: 0, marginBottom: '8px', textAlign: 'center' }}>
          Criar sua Conta
        </h2>
        <p style={{ color: '#888888', fontSize: '14px', textAlign: 'center', marginBottom: '24px' }}>
          Assine em minutos e mantenha seu veículo novo todos os dias.
        </p>

        {message && (
          <div
            style={{
              padding: '10px 14px',
              borderRadius: '6px',
              marginBottom: '20px',
              fontSize: '14px',
              backgroundColor: 'rgba(95, 207, 128, 0.2)',
              color: 'var(--accent-color)',
              border: '1px solid var(--accent-color)',
            }}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label
              htmlFor="name"
              style={{ display: 'block', color: '#dddddd', marginBottom: '8px', fontSize: '14px' }}
            >
              Nome Completo
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Carlos Eduardo"
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

          <div style={{ marginBottom: '16px' }}>
            <label
              htmlFor="email"
              style={{ display: 'block', color: '#dddddd', marginBottom: '8px', fontSize: '14px' }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
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

          <div style={{ marginBottom: '16px' }}>
            <label
              htmlFor="password"
              style={{ display: 'block', color: '#dddddd', marginBottom: '8px', fontSize: '14px' }}
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mínimo 6 caracteres"
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

          <div style={{ marginBottom: '24px' }}>
            <label
              htmlFor="plan"
              style={{ display: 'block', color: '#dddddd', marginBottom: '8px', fontSize: '14px' }}
            >
              Plano Escolhido
            </label>
            <select
              id="plan"
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value)}
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
            >
              <option value="basic">Plano Básico - R$ 79,90/mês</option>
              <option value="plus">Plano Plus - R$ 149,90/mês (Recomendado)</option>
              <option value="premium">Plano Premium - R$ 249,90/mês</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Button type="submit" variant="primary" style={{ width: '100%', padding: '12px' }}>
              Criar conta e Começar
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={fillDemoData}
              style={{ width: '100%', fontSize: '13px', padding: '8px' }}
            >
              Preencher dados de teste
            </Button>
          </div>

          <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '14px', color: '#888' }}>
            Já tem uma conta cadastrada?{' '}
            <Link to="/login" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>
              Fazer login
            </Link>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default RegisterPage;