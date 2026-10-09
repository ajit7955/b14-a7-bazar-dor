"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function CategoryProductList({ products }) {
  const [sortBy, setSortBy] = useState("default");

  const sortedProducts = useMemo(() => {
    const items = [...products];

    if (sortBy === "price-low") {
      return items.sort(
        (a, b) => Number(a.today || 0) - Number(b.today || 0)
      );
    }

    if (sortBy === "price-high") {
      return items.sort(
        (a, b) => Number(b.today || 0) - Number(a.today || 0)
      );
    }

    if (sortBy === "change-high") {
      return items.sort(
        (a, b) =>
          Math.abs(Number(b.change?.pct || 0)) -
          Math.abs(Number(a.change?.pct || 0))
      );
    }

    if (sortBy === "name") {
      return items.sort((a, b) =>
        String(a.nameBn || "").localeCompare(
          String(b.nameBn || ""),
          "bn"
        )
      );
    }

    return items;
  }, [products, sortBy]);

  if (!products || products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
        <div className="text-6xl">📦</div>

        <h2 className="mt-5 text-2xl font-bold text-gray-800">
          কোনো পণ্য পাওয়া যায়নি
        </h2>

        <p className="mt-2 text-gray-500">
          এই ক্যাটাগরিতে বর্তমানে কোনো পণ্যের তথ্য নেই।
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-500">
            মোট পণ্য
          </p>

          <p className="text-xl font-bold text-gray-900">
            {products.length} টি
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <label
            htmlFor="sort"
            className="text-sm font-semibold text-gray-700"
          >
            সাজান:
          </label>

          <select
            id="sort"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
          >
            <option value="default">
              ডিফল্ট
            </option>

            <option value="price-low">
              দাম: কম থেকে বেশি
            </option>

            <option value="price-high">
              দাম: বেশি থেকে কম
            </option>

            <option value="change-high">
              পরিবর্তন: বেশি থেকে কম
            </option>

            <option value="name">
              নাম অনুযায়ী
            </option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}