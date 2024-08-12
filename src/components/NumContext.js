import React, { createContext, useState } from 'react';

const NumContext = createContext();

export const NumProvider = ({ children }) => {
  const [num, setNum] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((cartItem) => cartItem._id === item._id);
      if (itemExists) {
        return prevItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <NumContext.Provider value={{ num, setNum, cartItems, setCartItems, addItemToCart }}>
      {children}
    </NumContext.Provider>
  );
};

export default NumContext;
