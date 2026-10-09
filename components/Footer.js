import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🛒</span>

              <h2 className="text-xl font-bold">
                বাজার দর
              </h2>
            </div>

            <p className="mt-4 max-w-md text-sm leading-7 text-gray-400">
              বাংলাদেশের দৈনন্দিন বাজারদর সহজে জানা,
              তুলনা করা এবং সঠিক সিদ্ধান্ত নেওয়ার জন্য
              একটি সহজ প্ল্যাটফর্ম।
            </p>
          </div>

          <div>
            <h3 className="font-bold">
              দ্রুত লিংক
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">
              <Link
                href="/"
                className="transition hover:text-white"
              >
                হোম
              </Link>

              <Link
                href="/signin"
                className="transition hover:text-white"
              >
                লগইন
              </Link>

              <Link
                href="/signup"
                className="transition hover:text-white"
              >
                সাইন আপ
              </Link>

              <Link
                href="/profile"
                className="transition hover:text-white"
              >
                প্রোফাইল
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold">
              বাজার দর
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              প্রতিদিনের প্রয়োজনীয় পণ্যের বর্তমান
              দাম এক জায়গায় দেখুন।
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} বাজার দর. All rights reserved.
        </div>
      </div>
    </footer>
  );
}