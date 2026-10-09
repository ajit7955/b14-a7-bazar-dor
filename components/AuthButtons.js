"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function AuthButtons() {
const [loadingProvider, setLoadingProvider] = useState("");

async function handleSocialSignIn(provider) {
setLoadingProvider(provider);

```
try {
  const result = await authClient.signIn.social({
    provider,
    callbackURL: "/profile",
  });

  if (result?.error) {
    toast.error(
      result.error.message ||
        `${provider} দিয়ে লগইন করা যায়নি।`
    );
    setLoadingProvider("");
  }
} catch {
  toast.error(
    `${provider} login configuration পরীক্ষা কর।`
  );
  setLoadingProvider("");
}
```

}

return ( <div className="mt-5 space-y-3">
<button
type="button"
disabled={Boolean(loadingProvider)}
onClick={() => handleSocialSignIn("google")}
className="w-full rounded-lg border border-gray-300 px-4 py-3 font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-60"
>
{loadingProvider === "google"
? "Google খুলছে..."
: "Continue with Google"} </button>

```
  <button
    type="button"
    disabled={Boolean(loadingProvider)}
    onClick={() => handleSocialSignIn("github")}
    className="w-full rounded-lg border border-gray-300 px-4 py-3 font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-60"
  >
    {loadingProvider === "github"
      ? "GitHub খুলছে..."
      : "Continue with GitHub"}
  </button>
</div>
```

);
}
