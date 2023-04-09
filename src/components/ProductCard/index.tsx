import styles from './styles.module.scss';
import cartIcon from '../../assets/cart-icon-3.svg';
import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    tags: string[];
    imageSrc: string;
  };
}
export const ProductCard = ({ product }: ProductCardProps) => {
  const { addNewProductToCart } = useContext(CartContext);
  const [productAmount, setProductAmount] = useState(1);

  const addProductToCart = () => {
    const productProps = {
      id: product.id,
      name: product.name,
      price: product.price,
      imageSrc: product.imageSrc,
      amount: productAmount,
    };

    addNewProductToCart(productProps);
  };

  const increaseProductAmount = () => {
    setProductAmount((amount) => amount + 1);
  };

  const decreaseProductAmount = () => {
    setProductAmount((amount) => amount - 1);
  };

  const productTag = (text: string) => <span key={text}>{text}</span>;
  const { name, description, price, tags } = product;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <img src={product.imageSrc} alt="" className={styles.productImage} />

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
            <button onClick={() => decreaseProductAmount()} disabled={productAmount === 1}>
              -
            </button>
            <span>{productAmount}</span>
            <button onClick={() => increaseProductAmount()}>+</button>
          </div>
          <button
            onClick={() => {
              addProductToCart();
            }}
          >
            <img src={cartIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
