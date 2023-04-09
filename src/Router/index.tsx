import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { Cart } from '../pages/Cart';
import { Checkout } from '../pages/Checkout';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register }  from '../pages/Register';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Route>
    </Routes>
  );
};
