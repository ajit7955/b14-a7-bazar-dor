"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function ProfileActions() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSignOut() {
    setLoading(true);

    try {
      const result = await authClient.signOut();

      if (result.error) {
        toast.error(
          result.error.message || "লগআউট করা যায়নি।"
        );
        return;
      }

      toast.success("লগআউট সম্পন্ন হয়েছে।");
      router.replace("/signin");
      router.refresh();
    } catch (error) {
      toast.error("লগআউট করার সময় সমস্যা হয়েছে।");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      disabled={loading}
      className="rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-60"
    >
      {loading ? "লগআউট হচ্ছে..." : "Logout"}
    </button>
  );
}