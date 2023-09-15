import { NavLink } from 'react-router-dom';
import { useAuth } from 'components/hooks/useAuth';

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

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/" style={styles.link} activeStyle={styles.activeLink}>Home</NavLink>
      {isLoggedIn && (
        <NavLink to="/phonebook" style={styles.link} activeStyle={styles.activeLink}>Phonebook</NavLink>
      )}
    </nav>
  );
};