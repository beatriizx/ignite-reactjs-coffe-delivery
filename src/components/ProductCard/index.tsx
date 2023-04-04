import styles from './styles.module.scss';
import cartIcon from '../../assets/cart-icon-3.svg';

interface ProductCardProps {
  product: {
    name: string;
    description: string;
    price: number;
    tags: string[];
    image: string;
  };
}
export const ProductCard = ({ product }: ProductCardProps) => {
  const productTag = (text: string) => <span>{text}</span>;
  const { name, description, price, tags } = product;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <img src={product.image} alt="" className={styles.productImage} />

        <div className={styles.productInfo}>
          <div className={styles.productTag}>{tags.map((tag) => productTag(tag))}</div>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>

        <div className={styles.priceContainer}>
          <span>
            R$ <b>{price}</b>
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
