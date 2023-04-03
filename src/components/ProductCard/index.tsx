import styles from './styles.module.scss';
import cartIcon from '../../assets/cart-icon-3.svg';
import coffeImage from '../../assets/coffe.svg';
export const ProductCard = () => {
  const productTag = (text: string) => <span className={styles.productTag}>{text}</span>;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <img src={coffeImage} alt="" className={styles.productImage} />

        <div className={styles.productInfo}>
          {productTag('Tradicional')}
          <h2>Expresso Tradicional</h2>
          <p>O tradicional café feito com água quente e grãos moídos</p>
        </div>

        <div className={styles.priceContainer}>
          <span>
            R$ <b>9,90</b>
          </span>
          <div className={styles.productControllers}>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button>
            <img src={cartIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
