import styles from './styles.module.scss';
import { CartForm } from '../../sections/CartForm';

export const Checkout = () => {
  return (
    <div className={`${styles.container} pageWidth`}>
      <CartForm />
    </div>
  );
};
