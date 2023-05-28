/** @format */
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import styles from './styles.module.scss';
import { Product } from '../../contexts/CartContext';
import cartIcon from '../../assets/cart-icon-3.svg';
import trashIcon from '../../assets/trash-icon.svg';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CartControllerProps {
	product: Product;
	pageType: string;
}

export const CartController = ({ product, pageType }: CartControllerProps) => {
	const [productAmount, setProductAmount] = useState<number>(product.amount || 1);
	const { addNewProductToCart, removeProductToCart, handleProductCartAmountChange } =
		useContext(CartContext);
	const buttonIcon = pageType === 'cart' ? trashIcon : cartIcon;

	const productProps = {
		id: product.id,
		name: product.name,
		price: product.price,
		imageSrc: product.imageSrc,
		amount: productAmount,
	};

	const handleCartChange = pageType === 'cart' ? removeProductToCart : addNewProductToCart;

	return (
		<div className={styles.container}>
      <ToastContainer />
			<div className={styles.productControllers}>
				<button
					onClick={() => {
						setProductAmount((amount) => amount - 1);
						if (pageType === 'cart') handleProductCartAmountChange(productProps, false);
					}}
					disabled={productAmount === 1}
					type='button'
				>
					-
				</button>
				<span>{productAmount}</span>
				<button
					onClick={() => {
						setProductAmount((amount) => amount + 1);
						if (pageType === 'cart') handleProductCartAmountChange(productProps);
					}}
					type='button'
				>
					+
				</button>
			</div>
			<button
				className={styles.buttonAction}
				onClick={() => {
					handleCartChange(productProps, true);
				}}
				type='button'
			>
				<img
					src={buttonIcon}
					alt=''
				/>
				{pageType === 'cart' && <span>REMOVER</span>}
			</button>
		</div>
	);
};
