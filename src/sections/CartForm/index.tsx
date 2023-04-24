import styles from './styles.module.scss';
import creditCardIcon from '../../assets/credit-card-icon.svg';
import debitCardIcon from '../../assets/debit-card-icon.svg';
import cashIcon from '../../assets/cash-icon.svg';
import cashIcon2 from '../../assets/cash-icon-2.svg';

export const CartForm = () => {
  return (
    <form className={styles.container}>
      <div className={styles.inputsContainer}>
        <h1>Endereço de Entrega</h1>
        <p>Informe o endereço onde deseja receber seu pedido</p>
        <input type="text" name="cep" placeholder="CEP" />
        <input type="text" name="street" placeholder="Rua" />
        <div>
          <input type="text" name="number" placeholder="Número" />
          <input type="text" name="complement" placeholder="Complemento" style={{ flex: 1 }} />
        </div>
        <div>
          <input type="text" name="neighborhood" placeholder="Bairro" />
          <input type="text" name="city" placeholder="Cidade" style={{ flex: 1 }} />
          <input type="text" name="uf" placeholder="UF" style={{ width: '10%' }} />
        </div>
      </div>

      <div className={styles.payment}>
        <div className={styles.paymentInfo}>
          <div>
            <img src={cashIcon2} alt="" />
          </div>
          <div>
            <h2>Pagamento</h2>
            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
          </div>
        </div>

        <div className={styles.paymentOptions}>
          <label>
            <img src={creditCardIcon} alt="" />
            Cartão de crédito
            <input type="radio" name="payment" id="payment1" />
          </label>

          <label>
            <img src={debitCardIcon} alt="" />
            Cartão de débito
            <input type="radio" name="payment" id="payment2" />
          </label>

          <label>
            <img src={cashIcon} alt="" />
            Débito
            <input type="radio" name="payment" id="payment3" />
          </label>
          
        </div>
      </div>
    </form>
  );
};
