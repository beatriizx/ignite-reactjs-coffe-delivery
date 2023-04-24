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
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <img src={creditCardIcon} alt="" />
            <span>Cartão de crédito</span>
          </button>

          <button>
            <img src={debitCardIcon} alt="" />
            <span>Cartão de débito</span>
          </button>

          <button>
            <img src={cashIcon} alt="" />
            <span> Débito</span>
          </button>
        </div>
      </div>
    </form>
  );
};
