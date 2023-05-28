import { useContext } from 'react';
import styles from './styles.module.scss';
import { CartContext, Product } from '../../contexts/CartContext';
import { CartController } from '../../components/CartController';

interface CartDetailsProps {
  handleViewCartDetails: () => void;
  isMobile: boolean;
}

export const CartDetails = ({ handleViewCartDetails, isMobile }: CartDetailsProps) => {
  const { products, totalProductsPrice, totalPrice, shippingPrice } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <ul>
        {products.map((product: Product) => (
          <>
            <li key={product.id} className={styles.productContainer}>
              <img src={product.imageSrc} alt="" className={styles.productImage} />
              <div className={styles.productContent}>
                <div className={styles.productInfo}>
                  <span>{product.name}</span>
                  <span>R$ {product.price}</span>
                </div>
                <CartController product={product} pageType="cart" />
              </div>
            </li>
          </>
        ))}
      </ul>
      <div className={styles.cartInfo}>
        <div>
          <span>Total de itens:</span>
          <span>R$ {totalProductsPrice}</span>
        </div>
        <div>
          <span>Entrega:</span>
          <span>R$ {shippingPrice}</span>
        </div>

        <div>
          <span>Total: </span>
          <span>R$ {totalPrice}</span>
        </div>
      </div>

      <button
        className={styles.confirmOrder}
        type={isMobile ? 'button' : 'submit'}
        onClick={isMobile ? handleViewCartDetails : () => {}}
      >
        {isMobile ? 'Ir para o Checkout' : ' CONFIRMAR PEDIDO'}
      </button>
    </div>
  );
};
