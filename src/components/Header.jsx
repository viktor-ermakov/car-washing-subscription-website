// src/components/Header.jsx
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from './Button';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getStoredUser = () => {
    try {
      const stored = localStorage.getItem('currentUser');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  };

  const user = getStoredUser();

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/' || location.pathname === `/${sectionId}`) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate(`/#${sectionId}`);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <header
      style={{
        backgroundColor: '#161616',
        borderBottom: '1px solid #2a2a2a',
        padding: '14px 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '24px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ color: 'var(--accent-color)' }}>✦</span> ShineWash
        </Link>
      </div>
      <nav>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '18px',
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <button
              onClick={() => scrollToSection('services')}
              style={{
                background: 'none',
                border: 'none',
                color: '#cccccc',
                cursor: 'pointer',
                fontSize: '15px',
                padding: '6px 8px',
              }}
            >
              Serviços
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('plans')}
              style={{
                background: 'none',
                border: 'none',
                color: '#cccccc',
                cursor: 'pointer',
                fontSize: '15px',
                padding: '6px 8px',
              }}
            >
              Planos
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('how-it-works')}
              style={{
                background: 'none',
                border: 'none',
                color: '#cccccc',
                cursor: 'pointer',
                fontSize: '15px',
                padding: '6px 8px',
              }}
            >
              Como funciona
            </button>
          </li>

          {user ? (
            <>
              <li>
                <Button variant="outline" onClick={() => navigate('/account')}>
                  Minha Conta ({user.name || 'Usuário'})
                </Button>
              </li>
              <li>
                <Button variant="secondary" onClick={handleLogout}>
                  Sair
                </Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Button variant="secondary" onClick={() => navigate('/login')}>
                  Entrar
                </Button>
              </li>
              <li>
                <Button variant="primary" onClick={() => scrollToSection('plans')}>
                  Ver planos
                </Button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;