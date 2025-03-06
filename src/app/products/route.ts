import { products } from "@/data/produts";

export async function GET(req: Request) {
  return new Response(JSON.stringify(products), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}