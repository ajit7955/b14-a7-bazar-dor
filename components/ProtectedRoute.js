"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function ProtectedRoute({
  children,
}) {
  const router = useRouter();

  useEffect(() => {
    // BetterAuth session checking will be connected here.
    // The protected-route logic will be completed
    // after authentication setup.
  }, [router]);

  return children;
}