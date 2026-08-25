import Link from "next/link";

export default function SellerPage() {
  return (
    <div className="bg-[#eff0f5] min-h-[calc(100vh-140px)] py-10">
      <div className="max-w-[800px] mx-auto px-4">
        
        <div className="mb-6 text-center">
          <h1 className="text-[24px] font-medium text-[#424242]">
            Dokan Seller Center
          </h1>
          <p className="text-sm text-[#757575] mt-1">
            Manage your shop, products, and sales all in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          
          {/* Seller Login Card */}
          <div>
            <div className="mb-4">
              <h2 className="text-[18px] font-medium text-[#424242]">
                Welcome back! Please login.
              </h2>
            </div>
            <div className="bg-white p-5 sm:p-6 shadow-sm">
              <form>
                <div className="mb-3">
                  <label className="block text-[13px] text-[#424242] mb-1">
                    Phone Number or Email*
                  </label>
                  <input
                    type="text"
                    placeholder="Please enter your Phone Number or Email"
                    className="w-full border border-gray-300 px-3 py-2 text-sm rounded-sm focus:border-brand focus:outline-none transition-colors"
                  />
                </div>
                
                <div className="mb-3">
                  <label className="block text-[13px] text-[#424242] mb-1">
                    Password*
                  </label>
                  <input
                    type="password"
                    placeholder="Please enter your password"
                    className="w-full border border-gray-300 px-3 py-2 text-sm rounded-sm focus:border-brand focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex justify-end mb-4">
                  <Link href="#" className="text-[12px] text-[#1a9cb7] hover:underline">
                    Forgot Password?
                  </Link>
                </div>

                <button
                  type="button"
                  className="w-full bg-[#f57224] text-white font-medium py-2 rounded-sm text-sm hover:bg-[#d0611e] transition-colors uppercase"
                >
                  Login as Seller
                </button>
              </form>
            </div>
          </div>

          {/* Seller Register Card */}
          <div>
            <div className="mb-4">
              <h2 className="text-[18px] font-medium text-[#424242]">
                Create a Dokan Seller Account
              </h2>
            </div>
            <div className="bg-white p-5 sm:p-6 shadow-sm">
              <form>
                <div className="mb-3">
                  <label className="block text-[13px] text-[#424242] mb-1">
                    Shop Name*
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Shop Name"
                    className="w-full border border-gray-300 px-3 py-2 text-sm rounded-sm focus:border-brand focus:outline-none transition-colors"
                  />
                </div>
                
                <div className="mb-3">
                  <label className="block text-[13px] text-[#424242] mb-1">
                    Phone Number or Email*
                  </label>
                  <input
                    type="text"
                    placeholder="Please enter your Phone Number or Email"
                    className="w-full border border-gray-300 px-3 py-2 text-sm rounded-sm focus:border-brand focus:outline-none transition-colors"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-[13px] text-[#424242] mb-1">
                    Password*
                  </label>
                  <input
                    type="password"
                    placeholder="Minimum 6 characters with a number and a letter"
                    className="w-full border border-gray-300 px-3 py-2 text-sm rounded-sm focus:border-brand focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="button"
                  className="w-full bg-[#f57224] text-white font-medium py-2 rounded-sm text-sm hover:bg-[#d0611e] transition-colors uppercase"
                >
                  Sign Up as Seller
                </button>
                
                <div className="mt-3 text-[11px] text-[#757575] leading-relaxed">
                  By clicking &quot;Sign Up as Seller&quot;, you agree to Dokan&apos;s{" "}
                  <Link href="#" className="text-[#1a9cb7] hover:underline">
                    Seller Agreement
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-[#1a9cb7] hover:underline">
                    Privacy Policy
                  </Link>.
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
