import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="mx-auto flex min-h-[460px] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-medium text-green-700 shadow-sm">
            <span>📈</span>
            <span>আজকের বাজারদর এক নজরে</span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            বাংলাদেশের
            <span className="block text-green-600">
              প্রতিদিনের বাজার দর
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            চাল, ডাল, তেল, মসলা ও সবজির বর্তমান বাজারদর সহজেই দেখো।
            বিভিন্ন বাজারের দাম তুলনা করে সঠিক সিদ্ধান্ত নাও।
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#সব-পণ্য"
              className="rounded-xl bg-green-600 px-6 py-3 text-center font-semibold text-white shadow-md transition hover:bg-green-700"
            >
              🛒 সব পণ্যের দাম দেখুন
            </Link>

            <Link
              href="/signin"
              className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-center font-semibold text-gray-700 transition hover:border-green-500 hover:text-green-600"
            >
              👤 অ্যাকাউন্টে প্রবেশ
            </Link>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border bg-white p-4 shadow-sm">
              <p className="text-2xl font-bold text-green-600">
                33+
              </p>

              <p className="mt-1 text-sm text-gray-500">
                পণ্য
              </p>
            </div>

            <div className="rounded-xl border bg-white p-4 shadow-sm">
              <p className="text-2xl font-bold text-green-600">
                📊
              </p>

              <p className="mt-1 text-sm text-gray-500">
                দামের পরিবর্তন
              </p>
            </div>

            <div className="hidden rounded-xl border bg-white p-4 shadow-sm sm:block">
              <p className="text-2xl font-bold text-green-600">
                🏪
              </p>

              <p className="mt-1 text-sm text-gray-500">
                বিভিন্ন বাজার
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}