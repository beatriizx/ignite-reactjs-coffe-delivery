import styles from './styles.module.scss';
import { CartDetails } from '../../sections/CartDetails';
import { CartForm } from '../../sections/CartForm';

export const Cart = () => {
  return (
    <div className={`${styles.container} pageWidth`}>
      <CartForm />
      <CartDetails />
    </div>
  );
};
