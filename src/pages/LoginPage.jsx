// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import MainLayout from '../layouts/MainLayout';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    // Simulate login and persist user session
    const userName = email.split('@')[0];
    const userObj = {
      name: userName.charAt(0).toUpperCase() + userName.slice(1),
      email: email,
      plan: 'Plus',
      status: 'Ativa',
    };
    localStorage.setItem('currentUser', JSON.stringify(userObj));

    setMessage({ type: 'success', text: 'Login realizado com sucesso! Redirecionando...' });
    setTimeout(() => {
      navigate('/account');
    }, 600);
  };

  const fillDemoData = () => {
    setEmail('joao@example.com');
    setPassword('senha123');
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const targetEmail = email || prompt('Digite seu e-mail cadastrado:');
    if (targetEmail) {
      alert(`Enviamos um link de redefinição de senha para ${targetEmail}! Verifique sua caixa de entrada.`);
    }
  };

  return (
    <MainLayout>
      <div
        style={{
          maxWidth: '420px',
          margin: '40px auto',
          padding: '30px',
          border: '1px solid #333',
          borderRadius: '12px',
          backgroundColor: '#1e1e1e',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
        }}
      >
        <h2 style={{ color: '#ffffff', marginTop: 0, marginBottom: '20px', textAlign: 'center' }}>
          Acessar ShineWash
        </h2>

        {message && (
          <div
            style={{
              padding: '10px 14px',
              borderRadius: '6px',
              marginBottom: '20px',
              fontSize: '14px',
              backgroundColor: message.type === 'success' ? 'rgba(95, 207, 128, 0.2)' : 'rgba(220, 53, 69, 0.2)',
              color: message.type === 'success' ? 'var(--accent-color)' : '#ff6b6b',
              border: `1px solid ${message.type === 'success' ? 'var(--accent-color)' : '#dc3545'}`,
            }}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '18px' }}>
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

          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label htmlFor="password" style={{ color: '#dddddd', fontSize: '14px' }}>
                Senha
              </label>
              <button
                type="button"
                onClick={handleForgotPassword}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--primary-color)',
                  cursor: 'pointer',
                  fontSize: '13px',
                  padding: 0,
                }}
              >
                Esqueci minha senha
              </button>
            </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Sua senha secreta"
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Button type="submit" variant="primary" style={{ width: '100%', padding: '12px' }}>
              Entrar
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
            Não tem uma conta?{' '}
            <Link to="/register" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>
              Criar conta gratuita
            </Link>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default LoginPage;