import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProfileForm from "@/components/ProfileForm";
import { auth } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function UpdateProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/signin");
  }

  return (
    <>
      <Navbar />

      <main className="mx-auto min-h-[60vh] max-w-2xl px-4 py-12">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          প্রোফাইল আপডেট
        </h1>

        <p className="mb-8 text-gray-600">
          নিজের অ্যাকাউন্টের তথ্য পরিবর্তন কর।
        </p>

        <ProfileForm />
      </main>

      <Footer />
    </>
  );
}