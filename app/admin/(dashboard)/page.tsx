type KPI = {
  title: string;
  value: string;
  icon: string;
  badge?: string;
  badgeStyle?: string;
  iconWrapper: string;
};

type Activity = {
  entity: string;
  subtitle: string;
  category: string;
  categoryStyle: string;
  outcome: string;
  outcomeDot: string;
  timestamp: string;
  avatar: string;
};

const kpis: KPI[] = [
  {
    title: "Total Subscribers",
    value: "1,240",
    icon: "group",
    badge: "+12%",
    badgeStyle: "text-green-600 bg-green-50",
    iconWrapper: "bg-primary/10 text-primary",
  },
  {
    title: "Active Messages",
    value: "12",
    icon: "chat_bubble",
    badge: "Urgent",
    badgeStyle: "text-secondary bg-secondary-fixed/30",
    iconWrapper: "bg-secondary/10 text-secondary",
  },
  {
    title: "Recent Case Studies",
    value: "8",
    icon: "inventory_2",
    iconWrapper: "bg-stone-900 text-white",
  },
  {
    title: "Key Insights",
    value: "15",
    icon: "lightbulb",
    badge: "New",
    badgeStyle: "text-blue-600 bg-blue-50",
    iconWrapper: "bg-blue-100 text-blue-600",
  },
];

const activities: Activity[] = [
  {
    entity: "John Doe Construction",
    subtitle: "New Subscriber",
    category: "Lead Gen",
    categoryStyle: "bg-blue-100 text-blue-700",
    outcome: "Verified",
    outcomeDot: "bg-green-500",
    timestamp: "2 mins ago",
    avatar: "JD",
  },
  {
    entity: "Retail Growth 2024",
    subtitle: "Case Study Published",
    category: "Content",
    categoryStyle: "bg-stone-200 text-stone-700",
    outcome: "Live",
    outcomeDot: "bg-blue-500",
    timestamp: "1 hour ago",
    avatar: "📄",
  },
  {
    entity: "High-Value Inquiry",
    subtitle: "Message Received",
    category: "Support",
    categoryStyle: "bg-red-100 text-red-700",
    outcome: "Pending",
    outcomeDot: "bg-secondary",
    timestamp: "3 hours ago",
    avatar: "⚠️",
  },
];

export default function DashboardHome() {
  return (
    <div className="p-10 space-y-10 text-on-surface-variant bg-background">
      {/* Hero */}
      <section>
        <label className="text-[0.75rem] font-semibold text-primary uppercase tracking-[0.05em] mb-2 block">
          Executive Overview
        </label>

        <h2 className="text-4xl font-bold tracking-tight text-on-surface">
          Dashboard
        </h2>

        <p className="text-on-surface-variant max-w-2xl mt-4 leading-relaxed">
          Strategic performance metrics for Gmax Digital's growth ecosystem.
          Monitor engagement, outreach, and solution delivery in real-time.
        </p>
      </section>

      {/* KPI Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => (
          <div
            key={index}
            className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-transparent hover:border-outline-variant/20 transition-all"
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`p-2 rounded-lg ${kpi.iconWrapper}`}>
                <span className="material-symbols-outlined">{kpi.icon}</span>
              </div>

              {kpi.badge && (
                <span
                  className={`text-xs font-bold px-2 py-1 rounded ${kpi.badgeStyle}`}
                >
                  {kpi.badge}
                </span>
              )}
            </div>

            <div className="space-y-1">
              <h3 className="text-3xl font-black tracking-tighter text-on-surface">
                {kpi.value}
              </h3>
              <p className="text-sm font-medium text-on-surface-variant uppercase tracking-wider">
                {kpi.title}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Strategy Card */}
      <section className="relative pt-12">
        <div className="bg-on-surface-variant rounded-3xl p-12 text-white overflow-hidden relative min-h-[320px]">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-3xl font-bold mb-4">
              Strategic Expansion Program
            </h3>

            <p className="text-stone-400 leading-relaxed mb-8">
              Your current digital footprint is performing in the top 15% of
              your industry.
            </p>

            <button className="bg-secondary px-8 py-3 rounded-md font-bold uppercase tracking-widest text-xs">
              Initiate Strategy
            </button>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-primary/20 to-transparent"></div>
          <div className="hidden lg:block absolute -right-8 -bottom-10 w-96 bg-surface-container-highest p-8 rounded-2xl shadow-2xl text-on-surface transform rotate-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-tighter text-primary">
                  Next Milestone
                </p>
                <p className="text-lg font-bold">2.5k Subscribers</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between text-xs font-bold">
                <span>Progress</span>
                <span>48%</span>
              </div>
              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[48%]"></div>
              </div>
              <p className="text-[11px] text-on-surface-variant leading-tight">
                Estimated completion based on current velocity:{" "}
                <strong>14 Days</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Table */}
      <section className="bg-surface-container-low rounded-3xl p-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h4 className="text-2xl font-bold tracking-tight">
              Recent Strategic Activity
            </h4>
            <p className="text-on-surface-variant text-sm mt-1">
              Global audit log of system actions and marketing triggers.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-xs font-black text-on-surface-variant uppercase tracking-widest">
                <th className="pb-6 px-4">Entity</th>
                <th className="pb-6 px-4">Category</th>
                <th className="pb-6 px-4">Outcome</th>
                <th className="pb-6 px-4">Timestamp</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-outline-variant/10">
              {activities.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-surface-container transition-colors"
                >
                  <td className="py-6 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-surface-container-highest rounded-lg flex items-center justify-center font-bold text-primary">
                        {item.avatar}
                      </div>

                      <div>
                        <p className="font-bold text-sm">{item.entity}</p>
                        <p className="text-xs text-on-surface-variant">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="py-6 px-4">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${item.categoryStyle}`}
                    >
                      {item.category}
                    </span>
                  </td>

                  <td className="py-6 px-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${item.outcomeDot}`}
                      />
                      <span className="text-sm">{item.outcome}</span>
                    </div>
                  </td>

                  <td className="py-6 px-4 text-sm text-on-surface-variant font-mono">
                    {item.timestamp}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
