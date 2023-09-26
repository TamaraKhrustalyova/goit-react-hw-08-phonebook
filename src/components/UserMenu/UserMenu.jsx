import { useDispatch } from 'react-redux';
import operations  from 'redux/auth/Operations';
import { useAuth } from 'components/hooks/useAuth';

import { Tabs, Tab } from '@chakra-ui/react'


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Tabs >
      <Tab>
        <span>Welcome, {user.email}</span>
        <button 
          type="button" 
          onClick={() => dispatch(operations.logOut())}
          >
          Logout
        </button>
      </Tab>
    </Tabs>
    
  );
};

