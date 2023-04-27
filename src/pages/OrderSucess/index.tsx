interface OrderSucessProps {
  adress: {
    street: string;
    number: number;
    neighborhood: string;
    city: string;
    uf: string;
  };
  payment: 'Crédito' | 'Débito' | 'Dinheiro';
}

import motoboyImage from '../../assets/motoboy.png';

export const OrderSucess = ({ adress, payment }: OrderSucessProps) => {
  return (
    <div>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div>
        <div>
          <span>
            Entrega em: {adress.street}, {adress.number}
          </span>
          <span>
            {adress.neighborhood} - {adress.city}, {adress.uf}
          </span>
        </div>

        <div>
          <span>Previsão de entrega</span>
          <span> 20 min - 30 min </span>
        </div>

        <div>
          <span>Forma de pagamento</span>
          <span>{payment}</span>
        </div>
      </div>

      <img src={motoboyImage} alt="" />
    </div>
  );
};
