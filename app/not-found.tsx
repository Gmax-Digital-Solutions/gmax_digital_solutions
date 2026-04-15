export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0e0e11] text-white px-6">
      <div className="text-center max-w-lg">
        <h1 className="text-7xl font-black mb-4">404</h1>

        <p className="text-white/60 mb-8">
          The page you’re looking for doesn’t exist or has been repositioned.
        </p>

        <a
          href="/"
          className="px-6 py-3 bg-[#585DE1] font-bold inline-block hover:opacity-90 transition"
        >
          Return Home
        </a>
      </div>
    </main>
  );
}
