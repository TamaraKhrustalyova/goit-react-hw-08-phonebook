import { useDispatch } from 'react-redux';
import operations  from 'redux/auth/Operations';
import { useAuth } from 'components/hooks/useAuth';

import {Button } from '@chakra-ui/react';



export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <>
    {/* <Tabs variant='unstyled'>
      <Tab><span>Welcome, {user.email}</span></Tab>
    </Tabs>  
      <Button
        colorScheme='lightblue' variant='outline' size='sm' marginLeft="10px"
        type="button" 
        onClick={() => dispatch(operations.logOut())}
        >
        Logout
      </Button> */}
        
      <span>Welcome, {user.email}</span>
      <Button
        colorScheme='blue' variant='outline' size='sm'
        type="button" 
        onClick={() => dispatch(operations.logOut())}
        >
        Logout
      </Button>
    </>
    
      
   
    
  );
};

