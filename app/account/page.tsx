"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AccountPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
    }
  }, [user, loading, router]);

  if (loading || !user) return (
    <div className="bg-[#eff0f5] min-h-[calc(100vh-140px)] py-10 flex justify-center">
      <p className="text-gray-500">Loading...</p>
    </div>
  );

  return (
    <div className="bg-[#eff0f5] min-h-[calc(100vh-140px)] py-10">
      <div className="max-w-content mx-auto px-4">
        <h1 className="text-2xl font-semibold text-[#424242] mb-6">My Account</h1>
        <div className="bg-white p-6 shadow-sm rounded-sm">
          <h2 className="text-xl font-medium mb-4">Welcome back, {user.displayName || "User"}!</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">Email Address</label>
              <div className="text-base text-gray-800">{user.email}</div>
            </div>
            
            <button
              onClick={async () => {
                await logout();
                router.push("/");
              }}
              className="mt-6 px-6 py-2 bg-[#f57224] text-white font-medium rounded-sm text-sm hover:bg-[#d0611e] transition-colors"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
