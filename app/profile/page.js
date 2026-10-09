import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { auth } from "@/lib/auth";
import ProfileActions from "@/components/ProfileActions";

export const dynamic = "force-dynamic";

export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/signin");
  }

  return (
    <>
      <Navbar />

      <main className="mx-auto min-h-[60vh] max-w-4xl px-4 py-12">
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold text-green-700">
            তোমার অ্যাকাউন্ট
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            স্বাগতম, {session.user.name}
          </h1>

          <p className="mt-3 text-gray-600">
            {session.user.email}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/profile/update"
              className="rounded-lg bg-green-700 px-5 py-3 font-semibold text-white hover:bg-green-800"
            >
              প্রোফাইল আপডেট
            </a>

            <ProfileActions />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}