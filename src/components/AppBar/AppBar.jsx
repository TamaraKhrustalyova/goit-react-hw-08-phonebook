import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'components/hooks/useAuth';

import { Box  } from "@chakra-ui/react"

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
};


