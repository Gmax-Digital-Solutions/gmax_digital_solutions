// components/Footer.tsx
import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

const columns: FooterColumn[] = [
  {
    heading: "Expertise",
    links: [
      { label: "Strategy", href: "#" },
      { label: "Audit", href: "#" },
      { label: "Semantic SEO", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "LinkedIn", href: "#", external: true },
      { label: "Contact", href: "#" },
    ],
  },
];

const linkClass =
  "text-zinc-400 hover:text-[#F84343] text-xs uppercase tracking-[0.05em] transition-colors";

function FooterLinkItem({ link }: { link: FooterLink }) {
  if (link.external) {
    return (
      <Link
        href={link.href}
        className={`${linkClass} inline-flex items-center gap-2 group`}
      >
        {link.label}
        <span className="material-symbols-outlined text-[10px] transition-transform group-hover:translate-x-1">
          north_east
        </span>
      </Link>
    );
  }

  return (
    <Link href={link.href} className={linkClass}>
      {link.label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#241E20] dark:bg-black py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
        {/* Brand column */}
        <div>
          <div className="text-lg font-bold text-white mb-6 uppercase tracking-tighter">
            Gmax Digital
          </div>
          <p className="text-zinc-500 text-xs font-medium uppercase tracking-[0.05em] leading-relaxed">
            Architectural Solutions for Small Business. Optimizing for the next
            generation of truth-seekers.
          </p>
        </div>

        {/* Dynamic columns */}
        {columns.map((col) => (
          <div key={col.heading}>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.1em] mb-6">
              {col.heading}
            </h4>
            <ul className="space-y-4">
              {col.links.map((link) => (
                <li key={link.label}>
                  <FooterLinkItem link={link} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-zinc-800">
        <p className="text-zinc-600 text-[10px] uppercase tracking-widest">
          © 2024 Gmax Digital. Architectural Solutions for Small Business.
        </p>
      </div>
    </footer>
  );
}
