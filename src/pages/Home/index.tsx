import styles from './styles.module.scss';
import axios from 'axios';
import { IntroSection } from '../Home/Intro';
import { ProductCard } from '../../components/ProductCard';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [products, setProducts] = useState([]);

  const retrieveProducts = async () => {
    const { data } = await axios.get('http://localhost:3000/products');
    setProducts(data);
  };

  useEffect(() => {
    retrieveProducts();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContent}>
        <IntroSection />

        <h2>Nossos cafés</h2>
        <ul className={styles.productList}>
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
