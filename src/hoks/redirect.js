import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Redirect = ({ children, table }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/billing');
    } else {
      navigate(`/${table}`);
    }
  }, [location, navigate, table]);
  return <>{children}</>;
};

export default Redirect;
