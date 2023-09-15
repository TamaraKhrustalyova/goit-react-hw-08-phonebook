import { Route, Routes } from "react-router-dom";
import {Layout} from './Layout/Layout';
import { lazy } from "react";

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Phonebook = lazy(() => import('../pages/Phonebook'))



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/phonebook" element={<Phonebook />} />
      </Route>
    </Routes>
  );
};

export default App;