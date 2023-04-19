import { useContext } from 'react';
import { ProductCard } from '../../components/ProductCard';
import { CartController } from '../../components/CartController';
import { CartContext } from '../../contexts/CartContext';
import { Product } from '../../contexts/CartContext';
import styles from './styles.module.scss';
import { CartDetails } from '../../components/CartDetails';

export const Cart = () => {
 
  return (
    <div className={`${styles.container} pageWidth`}>
      <CartDetails />
    </div>
  );
};
