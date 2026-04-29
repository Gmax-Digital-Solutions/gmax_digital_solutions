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
      <div className="flex justify-between items-center w-full py-4 w-full max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex gap-8 items-center text-xl font-black tracking-tighter text-[#241E20] uppercase">
          <Image
            src={Logo}
            alt="Gmax Digital Logo"
            width={32}
            height={32}
            className="rounded-xl"
          />
          <Link href="/">Gmax Digital</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
