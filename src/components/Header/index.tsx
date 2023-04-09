import logo from '../../assets/logo.svg';
import locationIcon from '../../assets/location-icon.svg';
import cartIcon from '../../assets/cart-icon.svg';
import styles from './styles.module.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { totalProductsInCart } = useContext(CartContext);

  return (
    <div className={styles.headerContainer}>
      <div>
        <img src={logo} alt="Logo do Coffe Delivery" className={styles.headerLogo} />
      </div>
      <div className={styles.headerContent}>
        <div>
          <img src={locationIcon} alt="" />
          <span>São Paulo, SP</span>
        </div>
        <Link to="/cart">
          <button>
            <img src={cartIcon} alt="" />
            {totalProductsInCart > 0 && <span>{totalProductsInCart}</span>}
          </button>
        </Link>
      </div>
    </div>
  );
};
