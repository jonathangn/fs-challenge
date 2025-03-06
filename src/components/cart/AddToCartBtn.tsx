"use client";

import { use } from "react";
import CartContext from "context/CartContext";

const HOST = process.env.NEXT_PUBLIC_HOST;

export default function AddToCartBtn({ id }) {
  const { setCart } = use(CartContext);

  const handleAddToCart = () => {
    console.log(HOST + "/cart");
    fetch(HOST + "/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    }).then(async (res) => {
      const data = await res.json();
      setCart(data);
    });
  };

  return <button onClick={() => handleAddToCart()}>Comprar</button>;
}
