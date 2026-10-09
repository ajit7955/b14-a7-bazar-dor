import ProductGrid from "@/components/ProductGrid";

function getRisingProducts(products) {
  return [...products]
    .filter((product) => product.change?.dir === "up")
    .sort(
      (a, b) =>
        (b.change?.pct || 0) - (a.change?.pct || 0)
    )
    .slice(0, 6);
}

function getFallingProducts(products) {
  return [...products]
    .filter((product) => product.change?.dir === "down")
    .sort(
      (a, b) =>
        (b.change?.pct || 0) - (a.change?.pct || 0)
    )
    .slice(0, 6);
}

export default function ProductSections({
  products = [],
}) {
  const risingProducts = getRisingProducts(products);
  const fallingProducts = getFallingProducts(products);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <ProductGrid
        title="📈 সবচেয়ে বেশি দাম বেড়েছে"
        products={risingProducts}
      />

      <ProductGrid
        title="📉 সবচেয়ে বেশি দাম কমেছে"
        products={fallingProducts}
      />

      <ProductGrid
        id="সব-পণ্য"
        title="🛒 সব পণ্য"
        products={products}
      />
    </div>
  );
}