import styles from './styles.module.scss';

import { IntroSection } from '../Home/Intro';
import { ProductCard } from '../../components/ProductCard';

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContent}>
        <IntroSection />
        <ProductCard />
      </div>
    </div>
  );
};
