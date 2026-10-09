"use client";

import Link from "next/link";
import { ArrowDown, ArrowUp, Minus } from "lucide-react";
import {
  formatPrice,
  getChangeClass,
  getChangeText,
} from "@/lib/utils";

export default function ProductCard({ product }) {
  if (!product) {
    return null;
  }

  const isUp = product.change?.dir === "up";
  const isDown = product.change?.dir === "down";

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block overflow-hidden rounded-2xl border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-4 p-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-4xl">
          {product.image || product.categoryIcon || "🛒"}
        </div>

        <span
          className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ${getChangeClass(product)}`}
        >
          {isUp && <ArrowUp size={13} />}
          {isDown && <ArrowDown size={13} />}
          {!isUp && !isDown && <Minus size={13} />}

          {getChangeText(product)}
        </span>
      </div>

      <div className="px-5 pb-5">
        <p className="text-sm text-gray-500">
          {product.categoryIcon} {product.categoryNameBn}
        </p>

        <h3 className="mt-1 text-xl font-bold text-gray-900 transition group-hover:text-green-600">
          {product.nameBn}
        </h3>

        <div className="mt-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-gray-500">
              আজকের দাম
            </p>

            <p className="text-2xl font-extrabold text-gray-900">
              ৳{formatPrice(product.today)}
            </p>
          </div>

          <p className="text-sm text-gray-500">
            / {product.unit}
          </p>
        </div>

        <div className="mt-4 border-t pt-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">
              গতকাল
            </span>

            <span className="font-semibold text-gray-700">
              ৳{formatPrice(product.yesterday)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}