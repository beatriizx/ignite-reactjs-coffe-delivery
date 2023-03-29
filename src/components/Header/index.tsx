import logo from '../../assets/logo.svg';
import locationIcon from '../../assets/location-icon.svg';
import cartIcon from '../../assets/cart-icon.svg';

import styles from './styles.module.scss';

export const Home = () => {
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
        <button>
          <img src={cartIcon} alt="" />
        </button>
      </div>
    </div>
  );
};
