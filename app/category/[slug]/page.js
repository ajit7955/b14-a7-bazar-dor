import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryProductList from "@/components/CategoryProductList";
import { getProductsByCategory } from "@/lib/api";
import { notFound } from "next/navigation";

const categoryInfo = {
  chal: {
    name: "চাল",
    icon: "🍚",
    description:
      "বিভিন্ন ধরনের চালের বর্তমান বাজারদর দেখুন।",
  },

  dal: {
    name: "ডাল",
    icon: "🫘",
    description:
      "বিভিন্ন ধরনের ডালের বর্তমান বাজারদর দেখুন।",
  },

  tel: {
    name: "তেল",
    icon: "🫗",
    description:
      "বিভিন্ন ধরনের তেলের বর্তমান বাজারদর দেখুন।",
  },

  mosla: {
    name: "মসলা",
    icon: "🌶️",
    description:
      "বিভিন্ন ধরনের মসলার বর্তমান বাজারদর দেখুন।",
  },

  sobji: {
    name: "সবজি",
    icon: "🥬",
    description:
      "বিভিন্ন ধরনের সবজির বর্তমান বাজারদর দেখুন।",
  },
};

export default async function CategoryPage({ params }) {
  const { slug } = params;

  const category = categoryInfo[slug];

  if (!category) {
    notFound();
  }

  let products = [];

  try {
    products = await getProductsByCategory(slug);
  } catch (error) {
    console.error(
      "Category products fetch failed:",
      error.message
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        <section className="border-b bg-gradient-to-br from-green-50 via-white to-emerald-50">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
              <Link
                href="/"
                className="transition hover:text-green-600"
              >
                হোম
              </Link>

              <span>›</span>

              <span className="font-medium text-gray-800">
                {category.name}
              </span>
            </div>

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white text-5xl shadow-sm ring-1 ring-gray-100">
                {category.icon}
              </div>

              <div>
                <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  {category.name}
                </h1>

                <p className="mt-2 max-w-2xl text-gray-600">
                  {category.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <CategoryProductList products={products} />
        </section>
      </main>

      <Footer />
    </>
  );
}