// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, User as UserIcon, LogOut, ChevronRight } from 'lucide-react';
import Button from './Button';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getStoredUser = () => {
    try {
      const stored = localStorage.getItem('currentUser');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  };

  const user = getStoredUser();

  // Close mobile menu on browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => setIsMenuOpen(false);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle ESC key to dismiss mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Auto-close mobile menu on desktop viewport resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 820 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    if (location.pathname === '/' || location.pathname === `/${sectionId}`) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate(`/#${sectionId}`);
  };

  const handleNavigate = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  const handleLogout = () => {
    setIsMenuOpen(false);
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Brand / Logo */}
        <div className="header-brand">
          <Link to="/" className="header-logo-link" onClick={() => setIsMenuOpen(false)}>
            <span className="header-logo-badge">✦</span> ShineWash
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Navegação principal">
          <ul className="desktop-nav-list">
            <li>
              <button
                type="button"
                className="desktop-nav-btn"
                onClick={() => scrollToSection('services')}
              >
                Serviços
              </button>
            </li>
            <li>
              <button
                type="button"
                className="desktop-nav-btn"
                onClick={() => scrollToSection('plans')}
              >
                Planos
              </button>
            </li>
            <li>
              <button
                type="button"
                className="desktop-nav-btn"
                onClick={() => scrollToSection('how-it-works')}
              >
                Como funciona
              </button>
            </li>
          </ul>

          <div className="desktop-actions">
            {user ? (
              <>
                <Button
                  variant="outline"
                  className="btn-user"
                  onClick={() => handleNavigate('/account')}
                >
                  <UserIcon size={16} aria-hidden="true" />
                  <span>Minha Conta ({user.name || 'Usuário'})</span>
                </Button>
                <Button variant="secondary" onClick={handleLogout}>
                  <LogOut size={16} aria-hidden="true" />
                  <span>Sair</span>
                </Button>
              </>
            ) : (
              <>
                <Button variant="secondary" onClick={() => handleNavigate('/login')}>
                  Entrar
                </Button>
                <Button variant="primary" onClick={() => scrollToSection('plans')}>
                  Ver planos
                </Button>
              </>
            )}
          </div>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation-menu"
          aria-label={isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
        >
          {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

        {/* Mobile Menu Dropdown Panel */}
        <div
          id="mobile-navigation-menu"
          className={`mobile-menu-panel ${isMenuOpen ? 'open' : ''}`}
          aria-hidden={!isMenuOpen}
        >
          {user && (
            <div className="mobile-user-card">
              <div className="mobile-user-avatar" aria-hidden="true">
                {(user.name ? user.name.charAt(0).toUpperCase() : 'U')}
              </div>
              <div className="mobile-user-details">
                <span className="mobile-user-name">{user.name || 'Usuário'}</span>
                <span className="mobile-user-status">
                  Plano {user.plan || 'Membro'} • {user.status || 'Ativo'}
                </span>
              </div>
            </div>
          )}

          <ul className="mobile-nav-list" role="menu">
            <li role="none">
              <button
                type="button"
                role="menuitem"
                className="mobile-nav-link-btn"
                onClick={() => scrollToSection('services')}
              >
                <span>Serviços</span>
                <ChevronRight size={18} className="icon-arrow" aria-hidden="true" />
              </button>
            </li>
            <li role="none">
              <button
                type="button"
                role="menuitem"
                className="mobile-nav-link-btn"
                onClick={() => scrollToSection('plans')}
              >
                <span>Planos</span>
                <ChevronRight size={18} className="icon-arrow" aria-hidden="true" />
              </button>
            </li>
            <li role="none">
              <button
                type="button"
                role="menuitem"
                className="mobile-nav-link-btn"
                onClick={() => scrollToSection('how-it-works')}
              >
                <span>Como funciona</span>
                <ChevronRight size={18} className="icon-arrow" aria-hidden="true" />
              </button>
            </li>
          </ul>

          <div className="mobile-actions-group">
            {user ? (
              <>
                <Button
                  variant="outline"
                  onClick={() => handleNavigate('/account')}
                >
                  <UserIcon size={16} aria-hidden="true" />
                  <span>Minha Conta</span>
                </Button>
                <Button
                  variant="secondary"
                  onClick={handleLogout}
                >
                  <LogOut size={16} aria-hidden="true" />
                  <span>Sair da conta</span>
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="secondary"
                  onClick={() => handleNavigate('/login')}
                >
                  Entrar
                </Button>
                <Button
                  variant="primary"
                  onClick={() => scrollToSection('plans')}
                >
                  Ver planos
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Backdrop Overlay */}
      <div
        className={`mobile-menu-backdrop ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />
    </header>
  );
};

export default Header;