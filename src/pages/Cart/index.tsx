import { useContext } from 'react';
import { ProductCard } from '../../components/ProductCard';
import { CartController } from '../../components/CartController';
import { CartContext } from '../../contexts/CartContext';
import { Product } from '../../contexts/CartContext';
import styles from './styles.module.scss';

export const Cart = () => {
  const { products } = useContext(CartContext);

  return (
    <div>
      {products.map((product: Product) => (
        <>
          <div key={product.id} className={styles.productContainer}>
            <img src={product.imageSrc} alt="" className={styles.productImage} />
            <div className={styles.productContent}>
              <div className={styles.productInfo}>
                <span>{product.name}</span>
                <span>{product.price}</span>
              </div>
              <CartController product={product} pageType="cart" />
            </div>
          </div>
        </>
      ))}
    </div>
  );
};
