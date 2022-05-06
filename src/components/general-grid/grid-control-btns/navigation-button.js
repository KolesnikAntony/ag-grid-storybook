import React from 'react';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';
import { Button } from '@mui/material';

const useStyle = (match) => {
  return {
    btn: {
      color: '#00385',
      background: match ? 'rgba(0,56,93,.03)' : 'none',
      textTransform: 'none',
    },
  };
};

const NavigationButton = ({ to, children, ...rest }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  const sx = useStyle(match);
  return (
    <Button component={NavLink} to={to} {...rest} sx={sx.btn}>
      {children}
    </Button>
  );
};

export default NavigationButton;
