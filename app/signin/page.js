import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SignInForm from "@/components/SignInForm";

export default function SignInPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 py-12">
        <div className="mx-auto max-w-md px-4">
          <div className="rounded-2xl border bg-white p-6 shadow-sm sm:p-8">
            <div className="text-center">
              <div className="text-5xl">👋</div>

              <h1 className="mt-4 text-3xl font-extrabold text-gray-900">
                স্বাগতম
              </h1>

              <p className="mt-2 text-gray-500">
                তোমার Bazar Dor account-এ login করো।
              </p>
            </div>

            <div className="mt-8">
              <SignInForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}