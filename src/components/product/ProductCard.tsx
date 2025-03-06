import AddToCartBtn from "../cart/AddToCartBtn";

export default function ProductCard({ product }) {
  const { id, name, price } = product;

  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>{price}</p>
      <AddToCartBtn id={id} />
    </div>
  )
}
