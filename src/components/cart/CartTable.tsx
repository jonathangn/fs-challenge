"use client";
import { use, useEffect, useState } from "react";
import CartContext from "context/CartContext";

export default function CartTable() {
  const { cart, open } = use(CartContext);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    let totalCart = cart?.reduce((acc, i) => acc + i.quantity * i.price, 0);
    setTotalCart(totalCart);
  }, [cart, open]);

  return (
    <>
      {open && cart?.length > 0 ? (
        <div className="cart-content">
          <h1>Elementos agregados al carrito</h1>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.quantity * item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-total">
            <h3>Total: $ {totalCart}</h3>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
