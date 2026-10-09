import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <div className="text-7xl">
          🔎
        </div>

        <h1 className="mt-6 text-4xl font-extrabold text-gray-900">
          404
        </h1>

        <h2 className="mt-2 text-2xl font-bold text-gray-800">
          পেজটি পাওয়া যায়নি
        </h2>

        <p className="mt-3 text-gray-500">
          তুমি যে পেজটি খুঁজছো সেটি হয়তো নেই অথবা
          সরিয়ে ফেলা হয়েছে।
        </p>

        <Link
          href="/"
          className="mt-7 inline-block rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
        >
          🏠 হোম পেজে ফিরে যাও
        </Link>
      </div>
    </main>
  );
}

