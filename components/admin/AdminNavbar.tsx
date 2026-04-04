export default function AdminNavbar() {
  return (
    <header className="w-full h-16 sticky top-0 z-40 bg-white/70 backdrop-blur-md shadow-sm flex items-center justify-between px-8 border-b border-stone-100 text-on-surface-variant">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">
            search
          </span>
          <input
            type="text"
            placeholder="Search strategic assets..."
            className="w-full bg-surface-container border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <button className="text-stone-500 hover:text-blue-600 transition-colors relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-secondary rounded-full border-2 border-white"></span>
          </button>
          <div className="h-8 w-8 rounded-full overflow-hidden border border-outline-variant bg-surface-container">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc8b8f3xUxKVxAKLu8_1CkeNz9QdNZHr3WU88TjrPRTX563tMGNNlULpRuyj1XjYaH2kFIswC3REFdGluPvPJh2zsybQa1ccEPK0tJvd83HqBKNG0LpnackdHtj6Wd6stDTNddp4S6Gbjcn0yCcgRlHK9ELzeM2kINoNAbCy2pSFu4XzZtioXwpw9vlQ2ohOpufZwDDtQRw6eqPh6UCC7sDbuXrynqKqNl0fz8E9wrzJs2AuehDknjq40L1qMurOhthqd7pAEH2i4"
              alt="Professional headshot of an executive in a minimalist studio setting with soft lighting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
