import { Route, Routes } from "react-router-dom";
import {Layout} from './Layout/Layout';
import { useEffect, lazy } from "react";
import operations from 'redux/auth/Operations';
import { useDispatch } from 'react-redux';
import { useAuth } from 'components/hooks/useAuth';
import { PrivateRoute } from 'components/PrivateRout';
import { RestrictedRoute } from 'components/RestrictedRout';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Phonebook = lazy(() => import('../pages/Phonebook'))

const App = () => {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/register" element={
          <RestrictedRoute redirectTo='/phonebook' component={<Register/>}/>
        } />
        <Route path="/login" element={
        <RestrictedRoute redirectTo='/phonebook' component={<Login/>}/>
        } />
        <Route path="/phonebook" element={
        <PrivateRoute redirectTo="/login" component={<Phonebook />} />
        } />
      </Route>
    </Routes>
  );
};

export default App;