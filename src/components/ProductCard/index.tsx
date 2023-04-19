import styles from './styles.module.scss';
import cartIcon from '../../assets/cart-icon-3.svg';
import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { CartController } from '../CartController';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    tags: string[];
    imageSrc: string;
    amount: number;
  };
}
export const ProductCard = ({ product }: ProductCardProps) => {
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
          <span className={styles.price}>
            R$ <b>{price}</b>
          </span>
         <CartController  product={product} pageType="home"/>
        </div>
      </div>
    </div>
  );
};
