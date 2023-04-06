import { createContext, ReactNode, useState } from 'react';

interface CartContextProviderProps {
  children: ReactNode;
}
type Product = {
  id: number;
  name: string;
  price: number;
  imageSrc: number;
  amount: number;
};

export const CartContext = createContext({} as any);
export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addNewProductToCart = (currentProduct: Product) => {
    const productAlreadyAdded = products.findIndex((product) => currentProduct.id === product.id);

    if (productAlreadyAdded !== -1) {
      let newProcutList = [...products];
      const oldProductAmount = newProcutList[productAlreadyAdded].amount;
      newProcutList[productAlreadyAdded].amount = currentProduct.amount + oldProductAmount;
      setProducts(newProcutList);
      return;
    }

    setProducts((oldProduct) => [...oldProduct, currentProduct]);
  };

  const totalProductsInCart = products.reduce((total, item) => (total += item.amount), 0);
  const totalPrice = products
    .reduce((total, item) => (total += item.price * item.amount), 0)
    .toFixed(2);

  return (
    <CartContext.Provider value={{ totalProductsInCart, addNewProductToCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
