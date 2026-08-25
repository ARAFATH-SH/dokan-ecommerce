import Link from "next/link";

export default function TopBar() {
  return (
    <div className="hidden sm:block bg-neutral-100 text-ink-soft text-xs border-b border-black/5">
      <div className="max-w-content mx-auto px-4 flex items-center justify-between h-8">
        <nav className="flex items-center gap-4">
          <Link href="#" className="hover:text-brand transition-colors text-[11px] uppercase tracking-wider font-medium text-brand">
            Save More on App
          </Link>
          <Link href="#" className="hover:text-brand transition-colors text-[11px] uppercase tracking-wider font-medium">
            Become a Seller
          </Link>
          <Link href="#" className="hover:text-brand transition-colors text-[11px] uppercase tracking-wider font-medium">
            Help & Support
          </Link>
        </nav>
        <nav className="flex items-center gap-4">
          <Link href="/login" className="hover:text-brand transition-colors text-[11px] uppercase tracking-wider font-medium">
            Login
          </Link>
          <Link href="/register" className="hover:text-brand transition-colors text-[11px] uppercase tracking-wider font-medium">
            Sign Up
          </Link>
        </nav>
      </div>
    </div>
  );
}
