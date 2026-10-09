import ProductCard from "@/components/ProductCard";

export default function ProductGrid({
  products = [],
  title,
  id,
}) {
  return (
    <section id={id} className="py-12">
      <div className="mb-7">
        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
          {title}
        </h2>

        <div className="mt-2 h-1 w-16 rounded-full bg-green-600" />
      </div>

      {products.length === 0 ? (
        <div className="rounded-2xl border bg-white p-10 text-center">
          <div className="text-5xl">📦</div>

          <h3 className="mt-4 text-xl font-bold text-gray-900">
            কোনো পণ্য পাওয়া যায়নি
          </h3>

          <p className="mt-2 text-gray-500">
            এই মুহূর্তে দেখানোর মতো কোনো পণ্য নেই।
          </p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  );
}