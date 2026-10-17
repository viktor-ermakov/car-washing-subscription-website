// src/components/Button.jsx
import React from 'react';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  style = {},
  className = '',
  disabled = false,
  ...props
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return {
          backgroundColor: '#333333',
          color: '#ffffff',
          border: '1px solid #555555',
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: 'var(--accent-color)',
          border: '2px solid var(--accent-color)',
        };
      case 'danger':
        return {
          backgroundColor: '#dc3545',
          color: '#ffffff',
          border: 'none',
        };
      case 'primary':
      default:
        return {
          backgroundColor: 'var(--accent-color)',
          color: 'white',
          border: 'none',
        };
    }
  };

  const baseStyle = {
    padding: '10px 20px',
    borderRadius: '6px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontSize: '15px',
    fontWeight: '600',
    transition: 'all 0.2s ease-in-out',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    opacity: disabled ? 0.6 : 1,
    ...getVariantStyles(),
    ...style,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={baseStyle}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;