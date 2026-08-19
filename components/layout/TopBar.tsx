import Link from "next/link";

export default function TopBar() {
  return (
    <div className="hidden sm:block bg-ink text-white text-xs">
      <div className="max-w-content mx-auto px-4 flex items-center justify-between h-9">
        <p>Free delivery on orders over &#2547;1500 within Dhaka</p>
        <nav className="flex items-center gap-5">
          <Link href="#" className="hover:text-brand-300 transition-colors">
            Track order
          </Link>
          <Link href="#" className="hover:text-brand-300 transition-colors">
            Help center
          </Link>
          <Link href="#" className="hover:text-brand-300 transition-colors">
            Sell on Dokan
          </Link>
        </nav>
      </div>
    </div>
  );
}
