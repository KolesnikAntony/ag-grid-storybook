import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Redirect = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/billing');
    }
  }, [location, navigate]);
  return <>{children}</>;
};

export default Redirect;
