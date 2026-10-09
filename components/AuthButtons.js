"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function AuthButtons() {
  const [loadingProvider, setLoadingProvider] = useState("");

  async function handleSocialSignIn(provider) {
    setLoadingProvider(provider);

    try {
      const result = await authClient.signIn.social({
        provider,
        callbackURL: "/profile",
      });

      if (result?.error) {
        toast.error(
          result.error.message ||
            `${provider} login failed. Check the configuration.`
        );
        setLoadingProvider("");
      }
    } catch (error) {
      console.error("Social login error:", error);

      toast.error(
        `${provider} login failed. Check the OAuth configuration.`
      );
      setLoadingProvider("");
    }
  }

  return (
    <div className="mt-5 space-y-3">
      <button
        type="button"
        disabled={Boolean(loadingProvider)}
        onClick={() => handleSocialSignIn("google")}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-60"
      >
        {loadingProvider === "google"
          ? "Opening Google..."
          : "Continue with Google"}
      </button>

      <button
        type="button"
        disabled={Boolean(loadingProvider)}
        onClick={() => handleSocialSignIn("github")}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-60"
      >
        {loadingProvider === "github"
          ? "Opening GitHub..."
          : "Continue with GitHub"}
      </button>
    </div>
  );
}