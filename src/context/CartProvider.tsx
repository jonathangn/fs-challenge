'use client'

import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);

  return (
    <CartContext value={{ cart, setCart, open, setOpen }}>
      {children}
    </CartContext>
  );
};

export default CartProvider;
