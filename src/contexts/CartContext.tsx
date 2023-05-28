/** @format */

import { createContext, ReactNode, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
interface CartContextProviderProps {
	children: ReactNode;
}
export type Product = {
	id: number;
	name: string;
	price: number;
	imageSrc: string;
	amount: number;
};

export const CartContext = createContext({} as any);
export const CartContextProvider = ({ children }: CartContextProviderProps) => {
	const [products, setProducts] = useState<Product[]>([]);

	const addNewProductToCart = (currentProduct: Product) => {
		const index = products.findIndex((product) => currentProduct.id === product.id);

		if (index !== -1) {
			let newProcutList = [...products];
			const oldProductAmount = newProcutList[index].amount;
			newProcutList[index].amount = currentProduct.amount + oldProductAmount;
			setProducts(newProcutList);
			return;
		}

		setProducts((oldProduct) => [...oldProduct, currentProduct]);
		toast.success('Produto adicionado ao seu carrinho!');
	};

	const removeProductToCart = (currentProduct: Product) => {
		const newArr = products.filter((product) => currentProduct.id !== product.id);
		setProducts(newArr);
	};

	const cleanCart = () => {
		setProducts([]);
	};

	const updateLocalStorage = () => {
		const value = JSON.stringify(products);
		localStorage.setItem('coffe-delivery-cart', value);
	};

	const handleProductCartAmountChange = (currentProduct: Product, increase: boolean = true) => {
		const product = products.findIndex((product) => currentProduct.id === product.id);
		let newProcutList = [...products];
		newProcutList[product].amount = increase
			? currentProduct.amount + 1
			: currentProduct.amount - 1;
		setProducts(newProcutList);
	};

	const totalProductsInCart = products.reduce((total, item) => (total += item.amount), 0);

	const totalProductsPrice = products
		.reduce((total, item) => (total += item.price * item.amount), 0)
		.toFixed(2);

	const shippingPrice = 3.5;

	const totalPrice = (Number(totalProductsPrice) + shippingPrice).toFixed(2);

	useEffect(() => {
		const retrieveProducts = localStorage.getItem('coffe-delivery-cart');

		if (retrieveProducts && JSON.parse(retrieveProducts).length > 0) {
			setProducts(JSON.parse(retrieveProducts));
			return;
		}
	}, []);

	useEffect(() => {
		updateLocalStorage();
	}, [products]);

	return (
		<CartContext.Provider
			value={{
				totalProductsInCart,
				addNewProductToCart,
				handleProductCartAmountChange,
				removeProductToCart,
				cleanCart,
				totalProductsPrice,
				totalPrice,
				shippingPrice,
				products,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
