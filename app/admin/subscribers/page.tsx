type SubscriberStatus = "Active" | "Unsubscribed";

interface Subscriber {
  id: number;
  initials: string;
  email: string;
  ref: string;
  joined: string;
  status: SubscriberStatus;
  engagement: number;
}

const subscribers: Subscriber[] = [
  {
    id: 1,
    initials: "JD",
    email: "j.dawson@techflow.io",
    ref: "#88219",
    joined: "Oct 24, 2023",
    status: "Active",
    engagement: 88,
  },
  {
    id: 2,
    initials: "MK",
    email: "marcus.k@solarsystems.com",
    ref: "#88215",
    joined: "Oct 22, 2023",
    status: "Active",
    engagement: 72,
  },
  {
    id: 3,
    initials: "SR",
    email: "sarah.reed@freelance.co",
    ref: "#88190",
    joined: "Oct 19, 2023",
    status: "Unsubscribed",
    engagement: 12,
  },
  {
    id: 4,
    initials: "LA",
    email: "linda.anderson@globalcorp.net",
    ref: "#88152",
    joined: "Oct 15, 2023",
    status: "Active",
    engagement: 95,
  },
];

const stats = [
  {
    label: "Total Audience",
    value: "12,482",
    note: "+14% this month",
  },
  {
    label: "Active Rate",
    value: "94.2%",
    note: "Industry Leading",
  },
  {
    label: "Engagement",
    value: "68.5",
    note: "Avg. Score",
  },
  {
    label: "New Today",
    value: "+142",
    note: "Peak performance",
    highlight: true,
  },
];

export default function SubscribersPage() {
  return (
    <section className="p-8 bg-background text-on-surface">
      {/* Header */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase block mb-2">
            Growth Metrics
          </span>
          <h2 className="text-4xl font-black tracking-tight">
            Subscriber Base
          </h2>
        </div>

        <button className="bg-surface-container-highest px-6 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-outline-variant/20 transition-all active:scale-95">
          Export CSV
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`p-6 rounded-xl shadow-sm ${
              stat.highlight
                ? "bg-primary text-white"
                : "bg-surface-container-lowest"
            }`}
          >
            <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">
              {stat.label}
            </p>
            <h3 className="text-3xl font-black">{stat.value}</h3>
            <p className="mt-2 text-xs font-bold opacity-80">{stat.note}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm">
        <div className="px-8 py-6 border-b flex justify-between">
          <div className="flex gap-4">
            <button className="text-sm font-bold text-primary border-b-2 border-primary pb-1">
              All Subscribers
            </button>
            <button className="text-sm text-stone-400">Active</button>
            <button className="text-sm text-stone-400">Unsubscribed</button>
          </div>

          <select className="text-xs font-bold bg-transparent">
            <option>Latest Joined</option>
            <option>Engagement Score</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-surface-container-low/50 text-left">
                <th className="px-8 py-4 text-xs uppercase">Email Address</th>
                <th className="px-8 py-4 text-xs uppercase">Joined</th>
                <th className="px-8 py-4 text-xs uppercase">Status</th>
                <th className="px-8 py-4 text-xs uppercase">Engagement</th>
              </tr>
            </thead>

            <tbody>
              {subscribers.map((subscriber) => (
                <tr
                  key={subscriber.id}
                  className="hover:bg-surface-container-low transition-colors"
                >
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-primary text-white text-xs flex items-center justify-center font-bold">
                        {subscriber.initials}
                      </div>
                      <div>
                        <p className="font-bold text-sm">{subscriber.email}</p>
                        <p className="text-[10px] text-stone-400">
                          ID: {subscriber.ref}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-8 py-5 text-sm">{subscriber.joined}</td>

                  <td className="px-8 py-5">
                    <span
                      className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                        subscriber.status === "Active"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-stone-100 text-stone-500"
                      }`}
                    >
                      {subscriber.status}
                    </span>
                  </td>

                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: `${subscriber.engagement}%` }}
                        />
                      </div>
                      <span className="text-xs font-bold">
                        {subscriber.engagement}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 flex justify-between border-t text-sm">
          <p>Showing 1 to 4 of 12,482 subscribers</p>

          <div className="flex gap-2">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`w-8 h-8 rounded ${
                  page === 1
                    ? "bg-primary text-white"
                    : "border border-surface-container"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Analytics Bridge */}
      <section className="mt-12">
        <div className="grid md:grid-cols-2 gap-8 bg-surface-container-highest p-12 rounded-2xl shadow-xl">
          <div>
            <h4 className="text-2xl font-black mb-4">
              Need granular insights?
            </h4>
            <p className="text-sm text-on-surface-variant mb-6">
              Connect subscriber data directly to Gmax Analytics to unlock
              behavioral patterns and conversion triggers.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold">
              Open Advanced Analytics
            </button>
          </div>

          <div className="hidden md:block bg-white/50 p-6 rounded-xl">
            <div className="space-y-3">
              <div className="h-2 bg-stone-200 rounded-full" />
              <div className="h-2 w-3/4 bg-stone-200 rounded-full" />
              <div className="h-2 w-1/2 bg-stone-200 rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
