import styles from './styles.module.scss';
import { useContext } from 'react';

import { CartContext, Product } from '../../contexts/CartContext';
import { CartController } from '../../components/CartController';
import { CartForm } from '../../sections/CartForm';

export const Cart = () => {
  return (
    <div className={`${styles.container} pageWidth`}>
      <CartForm />
    </div>
  );
};
