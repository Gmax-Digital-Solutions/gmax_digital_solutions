type MessageStatus = "Unread" | "Responded" | "Flagged";

interface Message {
  id: number;
  name: string;
  company: string;
  date: string;
  preview: string;
  status: MessageStatus;
  initials?: string;
  avatar?: string;
}

const messages: Message[] = [
  {
    id: 1,
    name: "Julian Blackwood",
    company: "Apex Logistics Inc.",
    date: "OCT 24, 2023",
    preview:
      "We are looking to overhaul our digital presence before the Q1 launch...",
    status: "Unread",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBT1jK-WOxhncgbv59KlplCCRj6aAc60iR6uVPVvJKsFLwjzkpCGaeBcuPp8EjCUZu66ANnhsif3gsQ5Y5KEM5qsfjyFylneOKeGCVE54kE5G68Olnc7O4ZIryG04rbSWU92JncE-wCnylGWwZlbTdU3cS79eLNZh9Vj6yc9QQbi7qqlg5UAe6gBd0IILhOx81MsLy6EihZUxLVuKlHPhvNrqbGrVHd9g2pGkFQpUQn7Uo_CaWUVWeLYFZlkaS_Y4JrzB4jhaBDMx4",
  },
  {
    id: 2,
    name: "Sarah Chen",
    company: "Velvet & Vine Boutique",
    date: "OCT 22, 2023",
    preview: "Thanks for the proposal. Our board has reviewed the strategy...",
    status: "Responded",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBoKK1xf4gWv953HYtD6OPgb8FQr7OcFyLEhU1WL6mLjrS0tKmR1_cbRzugM9THutcEg1sD2cbIg1zN1yTK8Z-8WYb0vP3eVZ0nVlWjyEWC-lnf8z--n3PxTLBsj1qApJWeirk8bwkJ0hYwfn9-h-zsONX0UdEJJKkWtH-CqZY4axI9dDo7OF9xsMj8NrQolLsxV7NXY-DowN6L07RJ5i6sTJg3FO2ZBOQZkYnoU5lJFC_fbkf2WZ1RcgL3CecG3r7V4Smsffv4-SY",
  },
  {
    id: 3,
    name: "Marcus Thorne",
    company: "Thorne Financial Group",
    date: "OCT 21, 2023",
    preview: "URGENT: Regarding the media spend audit...",
    status: "Flagged",
    initials: "MT",
  },
];

export default function MessagesSection() {
  return (
    <section className="p-10 max-w-7xl mx-auto bg-background text-on-surface">
      {/* Header */}
      <div className="mb-12">
        <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase block mb-2">
          Communication Hub
        </span>
        <h2 className="text-4xl font-black tracking-tight mb-4">
          Inbound Messaging
        </h2>
        <p className="text-on-surface-variant max-w-2xl">
          Manage prospect inquiries and high-value client communication from the
          Gmax Digital network.
        </p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-6 mb-10">
        {[
          { label: "New Leads Today", value: "12" },
          { label: "Response Rate", value: "84%" },
          { label: "Pipeline Value", value: "$14.5k" },
        ].map((metric) => (
          <div
            key={metric.label}
            className="bg-surface-container-low rounded-2xl p-6"
          >
            <p className="text-xs uppercase text-on-surface-variant mb-2">
              {metric.label}
            </p>
            <h3 className="text-2xl font-bold">{metric.value}</h3>
          </div>
        ))}
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-12 gap-8">
        {/* Sidebar */}
        <div className="col-span-3 space-y-6">
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full px-4 py-3 rounded-xl bg-surface-container-low outline-none"
          />

          <div className="space-y-3">
            {["All Messages", "Unread", "Flagged"].map((filter) => (
              <button
                key={filter}
                className="w-full text-left px-4 py-3 rounded-xl bg-surface-container-low hover:bg-surface-container"
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="bg-on-background rounded-2xl p-6 text-white">
            <h4 className="font-bold text-lg mb-2">AI Lead Screening Engine</h4>
            <p className="text-sm text-stone-400 mb-4">
              Automatically classify prospects by urgency, budget, and
              conversion potential.
            </p>
            <button className="bg-secondary px-4 py-2 rounded-lg text-xs font-bold uppercase">
              Configure AI
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="col-span-9 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className="group bg-surface-container-lowest rounded-2xl p-6 flex gap-6 items-start hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {message.avatar ? (
                <img
                  src={message.avatar}
                  alt={message.name}
                  className="w-14 h-14 rounded-xl object-cover"
                />
              ) : (
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center text-white font-bold">
                  {message.initials}
                </div>
              )}

              <div className="flex-1">
                <div className="flex justify-between mb-2">
                  <div>
                    <h3 className="font-bold">{message.name}</h3>
                    <p className="text-xs uppercase text-primary">
                      {message.company}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-stone-400">{message.date}</p>
                    <span className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {message.status}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-on-surface-variant">
                  {message.preview}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="fixed bottom-10 right-10 w-16 h-16 bg-on-background text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all group z-50">
        <span className="material-symbols-outlined text-2xl group-hover:rotate-90 transition-transform">
          add
        </span>
      </button>
    </section>
  );
}
