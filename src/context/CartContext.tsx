import { createContext, useState } from "react";
import ProductInCart from "@/types/productInCart";

const CartContext = createContext({
  cart: [] as ProductInCart[],
  setCart: (cart: ProductInCart[]) => {},
  open: false,
  setOpen: (open: boolean) => {},
});

export default CartContext;
