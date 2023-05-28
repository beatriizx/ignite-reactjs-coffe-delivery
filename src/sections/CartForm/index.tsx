import styles from './styles.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate, useLocation } from 'react-router-dom';

import creditCardIcon from '../../assets/credit-card-icon.svg';
import debitCardIcon from '../../assets/debit-card-icon.svg';
import cashIcon from '../../assets/cash-icon.svg';
import cashIcon2 from '../../assets/cash-icon-2.svg';
import { CartDetails } from '../CartDetails';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';

interface FormValues {
  cep: string;
  street: string;
  number: number;
  neighborhood: string;
  city: string;
  uf: string;
  payment: 'Crédito' | 'Débito' | 'Dinheiro';
  complement?: string;
}

export const CartForm = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const isMobile = width < 768;
  const [showProductDetail, setShowProductDetail] = useState(isMobile);
  const { cleanCart } = useContext(CartContext);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const navigate = useNavigate();
  const schema = yup.object({
    cep: yup.string().required('Cep é obrigatório'),
    street: yup.string().required('Rua é obrigatório'),
    number: yup.string().required('Numero é obrigatório'),
    neighborhood: yup.string().required('Bairro é obrigatório'),
    city: yup.string().required('Cidade é obrigatório'),
    uf: yup.string().required('UF é obrigatório'),
    payment: yup.string().required('Selecione uma forma de pagamento!'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    const { street, city, neighborhood, number, uf, payment } = data;
    const adress = {
      street,
      city,
      neighborhood,
      number,
      uf,
    };

    cleanCart();

    navigate('/order-sucess', {
      state: {
        adress,
        payment,
      },
    });
  };

  const handleShowForm = () => {
    setShowProductDetail(!showProductDetail);
  };

  return (
    <form className={`${styles.container}`} onSubmit={handleSubmit(onSubmit)}>
      {!showProductDetail && (
        <button className={styles.backToCartButton} onClick={handleShowForm}>
          {' '}
          &larr; Voltar para o carrinho
        </button>
      )}
      {!showProductDetail && (
        <div className={styles.inputsContainer}>
          <div className={styles.inputs}>
            <h1>Endereço de Entrega</h1>
            <p>Informe o endereço onde deseja receber seu pedido</p>
            <div className={styles.inputContainer}>
              <input
                className={errors.cep ? styles.inputError : ''}
                type="text"
                placeholder="CEP"
                {...register('cep')}
              />
              {errors.cep && <span className={styles.errorMessage}>{errors.cep.message}</span>}
            </div>
            <div className={styles.inputContainer}>
              <input
                className={errors.street ? styles.inputError : ''}
                type="text"
                placeholder="Rua"
                {...register('street')}
              />
              {errors.street && (
                <span className={styles.errorMessage}>{errors.street.message}</span>
              )}
            </div>
            <div>
              <div className={styles.inputContainer}>
                <input
                  className={errors.number ? styles.inputError : ''}
                  type="text"
                  placeholder="Número"
                  {...register('number')}
                />
                {errors.number && (
                  <span className={styles.errorMessage}>{errors.number.message}</span>
                )}
              </div>
              <input type="text" placeholder="Complemento" {...register('complement')} />
            </div>
            <div>
              <div className={styles.inputContainer}>
                <input
                  className={errors.neighborhood ? styles.inputError : ''}
                  type="text"
                  placeholder="Bairro"
                  {...register('neighborhood')}
                />
                {errors.neighborhood && (
                  <span className={styles.errorMessage}>{errors.neighborhood.message}</span>
                )}
              </div>
              <div className={styles.inputContainer}>
                <input
                  className={errors.city ? styles.inputError : ''}
                  type="text"
                  placeholder="Cidade"
                  {...register('city')}
                />
                {errors.city && <span className={styles.errorMessage}>{errors.city.message}</span>}
              </div>
              <div className={styles.inputContainer}>
                <input
                  className={errors.uf ? styles.inputError : ''}
                  type="text"
                  placeholder="UF"
                  {...register('uf')}
                />
                {errors.uf && <span className={styles.errorMessage}>{errors.uf.message}</span>}
              </div>
            </div>
          </div>
          <div className={styles.payment}>
            <div className={styles.paymentInfo}>
              <div className={styles.cashIcon}>
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
                <input type="radio" {...register('payment')} id="payment1" value="Crédito" />
              </label>
              <label>
                <img src={debitCardIcon} alt="" />
                Cartão de débito
                <input type="radio" id="payment2" {...register('payment')} value="Débito" />
              </label>
              <label>
                <img src={cashIcon} alt="" />
                Débito
                <input type="radio" id="payment3" {...register('payment')} value="Dinheiro" />
              </label>
            </div>
            {errors.payment && (
              <span className={styles.errorMessage}>{errors.payment.message}</span>
            )}
          </div>
        </div>
      )}

      {(!isMobile || showProductDetail) && (
        <div className={styles.orderProducts}>
          <CartDetails handleViewCartDetails={handleShowForm} isMobile={isMobile} />
        </div>
      )}

      {isMobile && !showProductDetail && (
        <button className={styles.confirmOrder} type="submit">
          CONFIRMAR PEDIDO
        </button>
      )}
    </form>
  );
};
