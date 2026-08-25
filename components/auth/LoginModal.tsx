"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-[400px] bg-white rounded-md shadow-xl overflow-hidden z-10 animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="p-6 sm:p-8">
          <div className="mb-6">
            <h2 className="text-[22px] font-medium text-[#424242]">
              Welcome to Dokan! Please login.
            </h2>
            <div className="text-sm text-[#424242] mt-1">
              New member?{" "}
              <Link href="/register" onClick={onClose} className="text-[#1a9cb7] hover:underline">
                Register
              </Link>{" "}
              here.
            </div>
          </div>

          <form>
            <div className="mb-4">
              <label className="block text-[13px] text-[#424242] mb-1.5">
                Phone Number or Email*
              </label>
              <input
                type="text"
                placeholder="Please enter your Phone Number or Email"
                className="w-full border border-gray-300 px-3 py-2.5 text-sm rounded-sm focus:border-brand focus:outline-none transition-colors"
              />
            </div>
            
            <div className="mb-2">
              <label className="block text-[13px] text-[#424242] mb-1.5">
                Password*
              </label>
              <input
                type="password"
                placeholder="Please enter your password"
                className="w-full border border-gray-300 px-3 py-2.5 text-sm rounded-sm focus:border-brand focus:outline-none transition-colors"
              />
            </div>

            <div className="flex justify-end mb-6">
              <Link href="#" className="text-[12px] text-[#1a9cb7] hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="button"
              className="w-full bg-[#f57224] text-white font-medium py-2.5 rounded-sm text-sm hover:bg-[#d0611e] transition-colors uppercase"
            >
              Login
            </button>
          </form>

          <div className="mt-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px bg-gray-200 flex-1" />
              <span className="text-[12px] text-[#757575]">Or, login with</span>
              <div className="h-px bg-gray-200 flex-1" />
            </div>

            <div className="flex flex-col gap-3">
              <button
                type="button"
                className="w-full bg-[#3b5998] text-white font-medium py-2.5 text-sm hover:bg-[#324b80] transition-colors flex items-center justify-center gap-3 rounded-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.039C6.5 2.039 2 6.539 2 12.039c0 5.083 3.766 9.283 8.656 9.945v-7.05h-2.61v-2.895h2.61v-2.222c0-2.576 1.536-3.992 3.882-3.992 1.127 0 2.308.2 2.308.2v2.532h-1.3c-1.28 0-1.68.795-1.68 1.61v1.872h2.86l-.458 2.895h-2.402v7.05c4.89-.662 8.656-4.862 8.656-9.945 0-5.5-4.5-10-10-10z"/>
                </svg>
                Facebook
              </button>

              <button
                type="button"
                className="w-full bg-[#d34836] text-white font-medium py-2.5 text-sm hover:bg-[#b03c2d] transition-colors flex items-center justify-center gap-3 rounded-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 10.457v3.315h6.72c-.276 1.76-1.025 3.102-1.97 4.048-.158.158-1.543 1.543-4.75 1.543-3.8 0-6.88-3.08-6.88-6.88s3.08-6.88 6.88-6.88c1.867 0 3.31.722 4.382 1.74l2.34-2.34c-1.74-1.74-4.048-2.82-6.722-2.82-5.717 0-10.4 4.683-10.4 10.4s4.683 10.4 10.4 10.4c3 0 5.422-1 7.2-2.857 1.838-1.838 2.42-4.42 2.42-6.42 0-.42-.04-.84-.1-1.257H12z"/>
                </svg>
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
