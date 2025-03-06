"use client";
import { ShoppingCart } from "@deemlol/next-icons";
import CartContext from "context/CartContext";
import { use, useContext, useEffect, useState } from "react";

export default function CartIcon() {
  const { cart, open, setOpen } = use(CartContext);
  const [totalItems, setTotalItems] = useState(0);

  const handleOpenCart = () => {
    setOpen(!open);
  };

  useEffect(() => {
    let totalItems: number = 0;
    cart.forEach((item) => {
      totalItems += item.quantity;
      setTotalItems(totalItems);
    });
  }, [cart]);

  return (
    <div>
      <button className="cart" onClick={() => handleOpenCart()}>
        <ShoppingCart size={24} color="white" />
      </button>
      <div className="cart-count">{totalItems}</div>
    </div>
  );
}
