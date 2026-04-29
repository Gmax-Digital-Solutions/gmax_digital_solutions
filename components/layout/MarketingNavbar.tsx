"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "@/public/images/gm-logo.jpg";
import RequestProposalButton from "@/components/ui/RequestProposalButton";
import MobileMenu from "../ui/MobileMenu";
import { SlideIn } from "../animations";
import RequestAuditButton from "../ui/AuditBtn";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-800 border-b border-gray-200 bg-white ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-3"
      }`}
    >
      <div className="relative max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 px-3 text-on-surface">
          <Image
            src={Logo}
            alt="Gmax Digital Logo"
            width={32}
            height={32}
            className="rounded-xl"
          />
          <Link href={"/"} className="text-on-surface font-bold">
            GMAX DIGITAL
          </Link>
        </div>
        <div className="flex items-center justify-end mr-6 gap-4">
          <nav className="hidden lg:flex items-center gap-4">
            <Link href="/" className="text-on-surface hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="text-on-surface hover:text-primary">
              About
            </Link>
            <Link
              href="/services"
              className="text-on-surface hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="/case-studies"
              className="text-on-surface hover:text-primary"
            >
              Case Studies
            </Link>
            <Link
              href="/insights"
              className="text-on-surface hover:text-primary"
            >
              Insights
            </Link>
            <Link href="/faq" className="text-on-surface hover:text-primary">
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-on-surface hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <button
            aria-label="Toggle menu"
            className="p-2 rounded-md hover:bg-surface-variant lg:hidden text-on-surface"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="hidden lg:flex">
            <RequestAuditButton />
          </div>
          <div className="hidden lg:flex">
            <RequestProposalButton />
          </div>
        </div>
        {/* Mobile Menu */}
        <SlideIn
          direction="right"
          duration={0.4}
          isVisible={isMenuOpen}
          className="fixed top-16 left-0 right-0 bottom-0 z-50"
        >
          <MobileMenu onClose={() => setIsMenuOpen(false)} />
        </SlideIn>
      </div>
    </div>
  );
};

export default Navbar;
