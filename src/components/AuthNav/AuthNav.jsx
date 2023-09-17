import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register"
        
        style={styles.link}
        active={styles.activeLink}
      >
        Register
      </NavLink>
      <NavLink to="/login"
        
        style={styles.link}
        active={styles.activeLink}
      >
        Log in
      </NavLink>
    </div>
  );
};