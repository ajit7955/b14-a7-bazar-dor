"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function ProfileForm() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (session?.user?.name) {
      setName(session.user.name);
    }
  }, [session?.user?.name]);

  async function handleSubmit(event) {
    event.preventDefault();

    const trimmedName = name.trim();

    if (trimmedName.length < 2) {
      toast.error("নাম কমপক্ষে ২ অক্ষরের হতে হবে।");
      return;
    }

    setLoading(true);

    try {
      const result = await authClient.updateUser({
        name: trimmedName,
      });

      if (result.error) {
        toast.error(result.error.message || "নাম আপডেট করা যায়নি।");
        return;
      }

      toast.success("প্রোফাইল আপডেট হয়েছে!");
      router.push("/profile");
      router.refresh();
    } catch {
      toast.error("আপডেট করার সময় সমস্যা হয়েছে।");
    } finally {
      setLoading(false);
    }
  }

  if (isPending) {
    return (
      <div className="rounded-xl border border-gray-200 p-6">
        প্রোফাইল লোড হচ্ছে...
      </div>
    );
  }

  if (!session) {
    return (
      <div className="rounded-xl border border-gray-200 p-6">
        প্রোফাইল আপডেট করতে আগে{" "}
        <a href="/signin" className="font-semibold text-green-700">
          Sign In
        </a>{" "}
        কর।
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div>
        <label
          htmlFor="profile-name"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          তোমার নাম
        </label>

        <input
          id="profile-name"
          type="text"
          required
          minLength={2}
          maxLength={100}
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          ইমেইল
        </label>

        <input
          type="email"
          value={session.user.email || ""}
          readOnly
          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-500"
        />

        <p className="mt-1 text-xs text-gray-500">
          এই ফর্মে ইমেইল পরিবর্তন করা যাবে না।
        </p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-green-700 px-5 py-3 font-semibold text-white hover:bg-green-800 disabled:opacity-60"
      >
        {loading ? "আপডেট হচ্ছে..." : "Save Changes"}
      </button>
    </form>
  );
}