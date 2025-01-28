import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

export default async function HomePge() {
  const latestProducts = await getLatestProducts();

  return (
    <ProductList
      data={latestProducts}
      title="Newest Arrival"
      limit={4}
    />
  );
}
