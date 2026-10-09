import Navbar from "@/components/Navbar";
import PriceTicker from "@/components/PriceTicker";
import Hero from "@/components/Hero";
import ProductSections from "@/components/ProductSections";
import Footer from "@/components/Footer";
import { getProducts } from "@/lib/api";

export default async function HomePage() {
  const products = await getProducts();

  const risingProducts = [...products]
    .filter((product) => product.change?.dir === "up")
    .sort(
      (a, b) =>
        (b.change?.pct || 0) - (a.change?.pct || 0)
    )
    .slice(0, 6);

  const fallingProducts = [...products]
    .filter((product) => product.change?.dir === "down")
    .sort(
      (a, b) =>
        (b.change?.pct || 0) - (a.change?.pct || 0)
    )
    .slice(0, 6);

  return (
    <>
      <Navbar />

      <PriceTicker products={products} />

      <main className="min-h-screen bg-gray-50">
        <Hero />

        <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">
                মোট পণ্য
              </p>

              <p className="mt-2 text-3xl font-extrabold text-gray-900">
                {products.length}
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">
                দাম বেড়েছে
              </p>

              <p className="mt-2 text-3xl font-extrabold text-green-600">
                {risingProducts.length}
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">
                দাম কমেছে
              </p>

              <p className="mt-2 text-3xl font-extrabold text-red-600">
                {fallingProducts.length}
              </p>
            </div>
          </div>
        </section>

        <ProductSections products={products} />
      </main>

      <Footer />
    </>
  );
}