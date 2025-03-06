import { products } from "@/data/produts";
import ProductInCart from "@/types/productInCart";

const cart = [];
const cartItems = [];

const headers = { "content-type": "application/json" };

export async function POST(req: Request) {
  const body = await req.json();
  const { id } = body;

  const itemInCart = cartItems.includes(id);

  // Si está en el carro, incrementamos la cantidad. Sino, agregamos la primera unidad.
  if (itemInCart) {
    const product: ProductInCart = cart.find((product) => product.id === id);
    product.quantity += 1;
  } else {
    const product: ProductInCart = products.find((product) => product.id === id);
    if (!product) {
      return new Response(JSON.stringify({ message: "Producto no encontrado" }), {
        status: 404, headers
      });
    }
    product.quantity = 1;
    cart.push(product);
    cartItems.push(id);
  }

  return new Response(JSON.stringify(cart), {
    status: 201, headers
  });
}

export async function GET(req: Request) {
  return new Response(JSON.stringify(cart), {
    status: 200, headers
  });
}