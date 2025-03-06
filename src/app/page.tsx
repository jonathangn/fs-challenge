"use client";

import CartTable from "@/components/cart/CartTable";
import ProductCard from "@/components/product/ProductCard";
import { useEffect, useState } from "react";

const HOST = process.env.NEXT_PUBLIC_HOST;

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetch(HOST + "/products");
      const products = (await data?.json()) || [];
      setProducts(products);
    }
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {products &&
          products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      <CartTable />
    </div>
  );
}
