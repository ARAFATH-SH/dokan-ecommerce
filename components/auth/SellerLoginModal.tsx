"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

interface SellerLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToRegister: () => void;
}

export default function SellerLoginModal({ isOpen, onClose, onSwitchToRegister }: SellerLoginModalProps) {
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
              Welcome back! Please login.
            </h2>
            <div className="text-sm text-[#424242] mt-1">
              Don&apos;t have a seller account?{" "}
              <button onClick={onSwitchToRegister} className="text-[#1a9cb7] hover:underline">
                Sign up
              </button>{" "}
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
              Login as Seller
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
