export default function Newsletter() {
  return (
    <section className="max-w-content mx-auto px-4 py-12">
      <div className="rounded-xl bg-brand-50 px-6 py-10 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-bold text-ink">Get offers before anyone else</h2>
          <p className="text-sm text-ink-soft mt-1">
            Join our list for early access to sales and new product launches.
          </p>
        </div>
        <form className="flex w-full sm:w-auto">
          <input
            type="email"
            required
            placeholder="Enter your email"
            aria-label="Email address"
            className="min-w-0 flex-1 sm:w-72 rounded-l-md border border-black/10 px-4 py-2.5 text-sm outline-none focus-ring"
          />
          <button
            type="submit"
            className="rounded-r-md bg-brand text-white px-5 text-sm font-medium hover:bg-brand-600 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
