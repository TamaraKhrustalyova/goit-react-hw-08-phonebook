import { useDispatch } from 'react-redux';
import operations  from 'redux/auth/Operations';
import { useAuth } from 'components/hooks/useAuth';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <span>Welcome, {user.email}</span>
      <button 
        type="button" 
        onClick={() => dispatch(operations.logOut())}
        >
        Logout
      </button>
    </div>
  );
};