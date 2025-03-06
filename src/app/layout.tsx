import "./global.css";
import Header from "@/components/layout/Header";
import React from "react";
import CartProvider from "context/CartProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Carrito de compras</title>
      </head>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
