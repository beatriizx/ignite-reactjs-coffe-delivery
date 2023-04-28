import { useLocation } from 'react-router-dom';
import motoboyImage from '../../assets/motoboy.png';
import locationIcon from '../../assets/location-icon-2.svg';
import timerIcon from '../../assets/timer-icon.svg';
import cashIcon from '../../assets/cash-icon-3.svg';
import styles from './styles.module.scss';

export const OrderSucess = () => {
  const location = useLocation();
  const { adress, payment } = location.state;

  return (
    <div className={`${styles.container} pageWidth`}>
      <div className={styles.title}>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <div className={styles.orderData}>
        <div className={styles.info}>
          <img src={locationIcon} alt="" />
          <div>
            <span>
              Entrega em: {adress.street}, {adress.number}
            </span>
            <span>
              {adress.neighborhood} - {adress.city}, {adress.uf}
            </span>
          </div>
        </div>

        <div className={styles.info}>
          <img src={timerIcon} alt="" />
          <div>
            <span>Previsão de entrega</span>
            <span> 20 min - 30 min </span>
          </div>
        </div>

        <div className={styles.info}>
          <img src={cashIcon} alt="" />
          <div>
            <span>Forma de pagamento</span>
            <span>{payment}</span>
          </div>
        </div>
      </div>

      <img src={motoboyImage} alt="" className={styles.motoboyImage} />
    </div>
  );
};
