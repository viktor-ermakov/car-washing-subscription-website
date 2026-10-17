// src/components/Footer.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

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

  return (
    <footer
      style={{
        backgroundColor: '#161616',
        borderTop: '1px solid #2a2a2a',
        padding: '30px 20px',
        textAlign: 'center',
        marginTop: 'auto',
      }}
    >
      <p style={{ margin: '0 0 10px 0', fontWeight: 'bold', fontSize: '18px', color: '#ffffff' }}>
        <span style={{ color: 'var(--accent-color)' }}>✦</span> ShineWash - Seu carro sempre impecável.
      </p>
      <nav>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            margin: '15px 0',
            padding: 0,
          }}
        >
          <li>
            <button
              onClick={() => scrollToSection('plans')}
              style={{
                background: 'none',
                border: 'none',
                color: '#aaaaaa',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              Planos
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('services')}
              style={{
                background: 'none',
                border: 'none',
                color: '#aaaaaa',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              Serviços
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('how-it-works')}
              style={{
                background: 'none',
                border: 'none',
                color: '#aaaaaa',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              Como funciona
            </button>
          </li>
          <li>
            <button
              onClick={() => alert('Suporte ShineWash: contato@shinewash.com.br | (11) 99999-8888')}
              style={{
                background: 'none',
                border: 'none',
                color: '#aaaaaa',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              Contato
            </button>
          </li>
        </ul>
      </nav>
      <p style={{ margin: 0, fontSize: '13px', color: '#666666' }}>
        &copy; 2026 ShineWash. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;