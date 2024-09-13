import React from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/access');
  };

  return (
    <div>
      <h1>SplashScreen Screen</h1>
      <button onClick={handleNavigate}>Ir para Acesso</button>
    </div>
  );
};

export default SplashScreen;