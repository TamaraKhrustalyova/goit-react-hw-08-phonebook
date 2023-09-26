import React from 'react';
import { Link } from 'react-router-dom';

import { Tabs, TabList, Tab } from '@chakra-ui/react'

// const styles = {
//   link: {
//     display: 'inline-block',
//     textDecoration: 'none',
//     padding: 12,
//     fontWeight: 700,
//     color: '#2A363B',
//   },
//   activeLink: {
//     color: '#E84A5F',
//   },
// };

export const AuthNav = () => {
  return (
    // <div>
    //   <NavLink to="/register"
        
    //     style={styles.link}
    //     active={styles.activeLink}
    //   >
    //     Register
    //   </NavLink>
    //   <NavLink to="/login"
        
    //     style={styles.link}
    //     active={styles.activeLink}
    //   >
    //     Log in
    //   </NavLink>
    // </div>
    <Tabs variant='unstyled'>
      <TabList>
        <Tab ><Link to="/register">Register</Link></Tab>
        <Tab ><Link to="/login">Log in</Link></Tab>
      </TabList>
      
    </Tabs>
  );
};