"use client";

import Link from "next/link";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";

const categories = [
  {
    slug: "chal",
    name: "চাল",
    icon: "🍚",
  },
  {
    slug: "dal",
    name: "ডাল",
    icon: "🫘",
  },
  {
    slug: "tel",
    name: "তেল",
    icon: "🫗",
  },
  {
    slug: "mosla",
    name: "মসলা",
    icon: "🌶️",
  },
  {
    slug: "sobji",
    name: "সবজি",
    icon: "🥬",
  },
];

function getBanglaDate() {
  return new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const date = getBanglaDate();

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-xl">
              🛒
            </span>

            <div>
              <p className="text-lg font-extrabold text-gray-900">
                বাজার দর
              </p>

              <p className="hidden text-xs text-gray-500 sm:block">
                {date}
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            <Link
              href="/"
              className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-green-50 hover:text-green-700"
            >
              হোম
            </Link>

            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-green-50 hover:text-green-700"
              >
                {category.icon} {category.name}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/signin"
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-green-500 hover:text-green-600"
            >
              লগইন
            </Link>

            <Link
              href="/signup"
              className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              সাইন আপ
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
            aria-label="Menu"
          >
            {open ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {open && (
          <div className="border-t py-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-medium hover:bg-green-50"
              >
                🏠 হোম
              </Link>

              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 font-medium hover:bg-green-50"
                >
                  {category.icon} {category.name}
                </Link>
              ))}

              <div className="mt-3 grid grid-cols-2 gap-2">
                <Link
                  href="/signin"
                  onClick={() => setOpen(false)}
                  className="rounded-lg border px-4 py-3 text-center font-semibold"
                >
                  লগইন
                </Link>

                <Link
                  href="/signup"
                  onClick={() => setOpen(false)}
                  className="rounded-lg bg-green-600 px-4 py-3 text-center font-semibold text-white"
                >
                  সাইন আপ
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}