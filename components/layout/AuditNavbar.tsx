"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";
import Logo from "@/public/images/gm-logo.jpg";
import Image from "next/image";

const Navbar: FC = () => {
  const router = useRouter();

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
      <div className="relative max-w-7xl mx-4 lg:mx-auto flex justify-between items-center py-4 ">
        {/* Logo */}
        <div className="flex gap-2 items-center font-black tracking-tighter text-on-surface uppercase">
          <Image
            src={Logo}
            alt="Gmax Digital Logo"
            width={32}
            height={32}
            className="rounded-xl"
          />
          <Link href="/">Gmax Digital</Link>
        </div>

        <Link
          href="/contact"
          className="bg-[#241E20] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#241E20]/90 transition-all active:scale-95"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
