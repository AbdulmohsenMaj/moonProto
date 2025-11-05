import { redirect } from "next/navigation";

export default function ProductPage({ params }) {
  const { id } = params || {};
  redirect(`/shop/product/${id}`);
}