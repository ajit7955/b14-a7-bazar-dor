import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProductBySlug } from "@/lib/api";

export default async function ProductDetailsPage({ params }) {
  const { slug } = params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const change = Number(product.change?.pct || 0);

  const formatPrice = (price) =>
    `৳${Number(price || 0).toLocaleString("bn-BD")}`;

  const priceStats = [
    {
      label: "আজকের দাম",
      value: product.today,
      color: "text-green-700",
      bg: "bg-green-50",
    },
    {
      label: "গতকালের দাম",
      value: product.yesterday,
      color: "text-gray-800",
      bg: "bg-gray-50",
    },
    {
      label: "গত সপ্তাহের দাম",
      value: product.lastWeek,
      color: "text-gray-800",
      bg: "bg-gray-50",
    },
    {
      label: "গত মাসের দাম",
      value: product.lastMonth,
      color: "text-gray-800",
      bg: "bg-gray-50",
    },
  ];

  const markets = Array.isArray(product.markets)
    ? product.markets
    : [];

  const lowestMarketPrice = markets.length
    ? Math.min(...markets.map((market) => Number(market.min)))
    : null;

  const highestMarketPrice = markets.length
    ? Math.max(...markets.map((market) => Number(market.max)))
    : null;

  const averagePrice = markets.length
    ? markets.reduce(
        (total, market) =>
          total +
          (Number(market.min) + Number(market.max)) / 2,
        0
      ) / markets.length
    : null;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-green-700">
                হোম
              </Link>

              <span>›</span>

              <Link
                href={`/category/${product.category}`}
                className="hover:text-green-700"
              >
                {product.categoryNameBn}
              </Link>

              <span>›</span>

              <span className="font-medium text-gray-800">
                {product.nameBn}
              </span>
            </div>

            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="flex min-h-64 items-center justify-center rounded-3xl border border-green-100 bg-white text-8xl shadow-sm">
                {product.image || product.categoryIcon || "🛒"}
              </div>

              <div>
                <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">
                  {product.categoryIcon} {product.categoryNameBn}
                </span>

                <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-5xl">
                  {product.nameBn}
                </h1>

                <p className="mt-3 text-gray-600">
                  প্রতি {product.unit === "kg" ? "কেজি" : product.unit}
                </p>

                <div className="mt-5 flex flex-wrap items-end gap-4">
                  <p className="text-4xl font-extrabold text-green-700">
                    {formatPrice(product.today)}
                  </p>

                  <span
                    className={`mb-1 rounded-full px-3 py-1 text-sm font-bold ${
                      change > 0
                        ? "bg-red-100 text-red-700"
                        : change < 0
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {change > 0 ? "▲" : change < 0 ? "▼" : "—"}{" "}
                    {Math.abs(change).toLocaleString("bn-BD")}% 
                  </span>
                </div>

                <p className="mt-3 text-sm text-gray-500">
                  {change > 0
                    ? "আগের দিনের তুলনায় দাম বেড়েছে।"
                    : change < 0
                      ? "আগের দিনের তুলনায় দাম কমেছে।"
                      : "আগের দিনের তুলনায় দাম অপরিবর্তিত।"}
                </p>

                <Link
                  href={`/category/${product.category}`}
                  className="mt-7 inline-flex rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
                >
                  ← এই ক্যাটাগরির সব পণ্য
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="mb-5 text-2xl font-bold text-gray-900">
            📊 দামের ইতিহাস
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {priceStats.map((stat) => (
              <div
                key={stat.label}
                className={`rounded-2xl border border-gray-100 ${stat.bg} p-5`}
              >
                <p className="text-sm text-gray-600">
                  {stat.label}
                </p>

                <p className={`mt-3 text-2xl font-extrabold ${stat.color}`}>
                  {formatPrice(stat.value)}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  প্রতি {product.unit === "kg" ? "কেজি" : product.unit}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
          <h2 className="mb-5 text-2xl font-bold text-gray-900">
            🏪 বাজারভিত্তিক দাম
          </h2>

          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-green-100 bg-white p-5">
              <p className="text-sm text-gray-500">
                সর্বনিম্ন বাজারদর
              </p>

              <p className="mt-2 text-2xl font-bold text-green-700">
                {lowestMarketPrice === null
                  ? "তথ্য নেই"
                  : formatPrice(lowestMarketPrice)}
              </p>
            </div>

            <div className="rounded-2xl border border-red-100 bg-white p-5">
              <p className="text-sm text-gray-500">
                সর্বোচ্চ বাজারদর
              </p>

              <p className="mt-2 text-2xl font-bold text-red-600">
                {highestMarketPrice === null
                  ? "তথ্য নেই"
                  : formatPrice(highestMarketPrice)}
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white p-5">
              <p className="text-sm text-gray-500">
                গড় বাজারদর
              </p>

              <p className="mt-2 text-2xl font-bold text-blue-700">
                {averagePrice === null
                  ? "তথ্য নেই"
                  : formatPrice(Math.round(averagePrice))}
              </p>
            </div>
          </div>

          {markets.length === 0 ? (
            <div className="rounded-2xl bg-white p-8 text-center text-gray-500">
              এই পণ্যের বাজারভিত্তিক তথ্য পাওয়া যায়নি।
            </div>
          ) : (
            <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full min-w-[600px] text-left text-sm">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="px-5 py-4">বাজার</th>
                    <th className="px-5 py-4">বিভাগ</th>
                    <th className="px-5 py-4">সর্বনিম্ন</th>
                    <th className="px-5 py-4">সর্বোচ্চ</th>
                  </tr>
                </thead>

                <tbody>
                  {markets.map((market, index) => (
                    <tr
                      key={`${market.market}-${index}`}
                      className="border-t border-gray-100 hover:bg-green-50"
                    >
                      <td className="px-5 py-4 font-semibold text-gray-800">
                        {market.market}
                      </td>

                      <td className="px-5 py-4 text-gray-600">
                        {market.division}
                      </td>

                      <td className="px-5 py-4 font-semibold text-green-700">
                        {formatPrice(market.min)}
                      </td>

                      <td className="px-5 py-4 font-semibold text-red-600">
                        {formatPrice(market.max)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}