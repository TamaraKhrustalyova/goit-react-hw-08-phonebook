import { Link } from 'react-router-dom';
import { useAuth } from 'components/hooks/useAuth';

import { Tabs, TabList, Tab } from '@chakra-ui/react'

// const styles = {
//     link: {
//       display: 'inline-block',
//       textDecoration: 'none',
//       padding: 12,
//       fontWeight: 700,
//       color: '#2A363B',
//     },
//     activeLink: {
//       color: '#E84A5F',
//     },
//   };

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (

    <Tabs>
      <TabList>
          {/* <NavLink to="/" >Home</NavLink>
          {isLoggedIn && (
          <NavLink to="/phonebook" >Phonebook</NavLink>
          )} */}
          <Tab><Link to="/" >Home</Link></Tab>
          {isLoggedIn && (
          <Tab><Link to="/phonebook" >Phonebook</Link></Tab>
          )}
      </TabList>
    </Tabs>
  );
};