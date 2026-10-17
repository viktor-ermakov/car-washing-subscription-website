// src/pages/HomePage.jsx
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Button from '../components/Button';
import PlanCard from '../components/PlanCard';
import ServiceCard from '../components/ServiceCard';
import { plans } from '../data/plans';
import { services } from '../data/services';

const HomePage = ({ defaultSection = '' }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const targetSection = defaultSection || (location.hash ? location.hash.replace('#', '') : null);
    if (targetSection) {
      setTimeout(() => {
        const el = document.getElementById(targetSection);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location, defaultSection]);

  const scrollTo = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section
        style={{
          textAlign: 'center',
          padding: '60px 20px 80px',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            backgroundColor: 'rgba(95, 207, 128, 0.15)',
            color: 'var(--accent-color)',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '20px',
            border: '1px solid rgba(95, 207, 128, 0.3)',
          }}
        >
          🚗 O clube de assinatura automotiva nº 1 da sua cidade
        </span>
        <h1
          style={{
            fontSize: '44px',
            fontWeight: '800',
            lineHeight: '1.2',
            marginBottom: '20px',
            color: '#ffffff',
          }}
        >
          Seu carro sempre impecável. <br />
          <span style={{ color: 'var(--accent-color)' }}>Sem complicação.</span>
        </h1>
        <p
          style={{
            fontSize: '18px',
            color: '#bbbbbb',
            maxWidth: '650px',
            margin: '0 auto 35px',
            lineHeight: '1.6',
          }}
        >
          Bem-vindo ao ShineWash. Diga adeus às filas e à sujeira. Tenha lavagens regulares,
          profissionais e agendadas diretamente pelo seu celular.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
          <Button
            variant="primary"
            onClick={() => scrollTo('plans')}
            style={{ padding: '14px 28px', fontSize: '16px' }}
          >
            Conhecer planos
          </Button>
          <Button
            variant="secondary"
            onClick={() => scrollTo('how-it-works')}
            style={{ padding: '14px 28px', fontSize: '16px' }}
          >
            Como funciona
          </Button>
        </div>
      </section>

      {/* How it Works Section */}
      <section
        id="how-it-works"
        style={{
          padding: '70px 20px',
          backgroundColor: '#181818',
          borderRadius: '16px',
          marginBottom: '60px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '32px', marginBottom: '12px', color: '#ffffff' }}>
          Como funciona o ShineWash
        </h2>
        <p style={{ color: '#888888', marginBottom: '45px', fontSize: '16px' }}>
          Cuidar do seu carro nunca foi tão fácil e acessível em 3 passos simples.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '30px',
            maxWidth: '1100px',
            margin: '0 auto',
            textAlign: 'left',
          }}
        >
          <div
            style={{
              backgroundColor: '#222222',
              padding: '28px',
              borderRadius: '12px',
              border: '1px solid #333333',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-color)',
                color: '#121212',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '18px',
                marginBottom: '16px',
              }}
            >
              1
            </div>
            <h3 style={{ fontSize: '18px', color: '#ffffff', marginBottom: '10px' }}>
              Escolha seu plano
            </h3>
            <p style={{ color: '#aaaaaa', fontSize: '14px', lineHeight: '1.5' }}>
              Selecione o plano ideal para a sua rotina com base na frequência e no tipo de cuidado
              que seu veículo precisa.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#222222',
              padding: '28px',
              borderRadius: '12px',
              border: '1px solid #333333',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-color)',
                color: '#121212',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '18px',
                marginBottom: '16px',
              }}
            >
              2
            </div>
            <h3 style={{ fontSize: '18px', color: '#ffffff', marginBottom: '10px' }}>
              Agende ou compareça
            </h3>
            <p style={{ color: '#aaaaaa', fontSize: '14px', lineHeight: '1.5' }}>
              Agende seus horários prioritários em nossa rede credenciada de forma 100% digital, sem
              espera.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#222222',
              padding: '28px',
              borderRadius: '12px',
              border: '1px solid #333333',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-color)',
                color: '#121212',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '18px',
                marginBottom: '16px',
              }}
            >
              3
            </div>
            <h3 style={{ fontSize: '18px', color: '#ffffff', marginBottom: '10px' }}>
              Carro brilhando sempre
            </h3>
            <p style={{ color: '#aaaaaa', fontSize: '14px', lineHeight: '1.5' }}>
              Seu carro higienizado e protegido com produtos ecológicos de primeira linha em todas as
              visitas.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '40px' }}>
          <Button onClick={() => scrollTo('plans')} variant="primary">
            Quero começar agora
          </Button>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" style={{ padding: '60px 20px', marginBottom: '60px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '34px', color: '#ffffff', marginBottom: '12px' }}>
            Planos sob medida para você
          </h2>
          <p style={{ color: '#888888', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
            Economize até 40% em relação a lavagens avulsas. Sem fidelidade: pause ou cancele a
            qualquer momento.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            maxWidth: '1100px',
            margin: '0 auto',
            alignItems: 'stretch',
          }}
        >
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              onSelect={(p) => navigate(`/register?plan=${p.id}`)}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        style={{
          padding: '70px 20px',
          backgroundColor: '#181818',
          borderRadius: '16px',
          marginBottom: '60px',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '32px', color: '#ffffff', marginBottom: '12px' }}>
            Nossos Serviços Inclusos
          </h2>
          <p style={{ color: '#888888', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
            Produtos profissionais biodegradáveis que garantem brilho intenso sem danificar a pintura.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          textAlign: 'center',
          padding: '60px 20px 80px',
          border: '1px solid #333333',
          borderRadius: '16px',
          backgroundColor: '#1e1e1e',
          maxWidth: '850px',
          margin: '0 auto 40px',
        }}
      >
        <h2 style={{ fontSize: '30px', color: '#ffffff', marginBottom: '14px' }}>
          Pronto para ter seu carro sempre novo?
        </h2>
        <p style={{ color: '#aaaaaa', fontSize: '16px', marginBottom: '28px' }}>
          Crie sua conta em menos de 2 minutos e aproveite todos os benefícios do ShineWash.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
          <Button
            variant="primary"
            onClick={() => navigate('/register')}
            style={{ padding: '12px 28px', fontSize: '16px' }}
          >
            Cadastrar agora
          </Button>
          <Button
            variant="secondary"
            onClick={() => navigate('/login')}
            style={{ padding: '12px 28px', fontSize: '16px' }}
          >
            Já sou cadastrado
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;