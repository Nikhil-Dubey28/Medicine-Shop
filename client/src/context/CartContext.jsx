import React, { createContext, useState, useContext, useEffect } from 'react';
import { MedicineContext } from './MedicineContext';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { medicines, setMedicines } = useContext(MedicineContext);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (index) => {
    const medicine = medicines[index];
    if (medicine.quantity > 0) {
      const updatedMedicines = [...medicines];
      updatedMedicines[index] = { ...medicine, quantity: medicine.quantity - 1 };
      setMedicines(updatedMedicines);

      const existingCartItem = cart.find(item => item.name === medicine.name);
      if (existingCartItem) {
        setCart(cart.map(item =>
          item.name === medicine.name ? { ...item, quantity: item.quantity + 1 } : item
        ));
      } else {
        setCart([...cart, { ...medicine, quantity: 1 }]);
      }
    }
  };

  return (
    <CartContext.Provider value={{ cart, cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
