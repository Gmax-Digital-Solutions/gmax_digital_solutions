"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MobileMenuProps = {
  onClose?: () => void;
};

const primaryLinks = [
  { name: "Home", link: "/" },
  { name: "Insights", link: "/insights" },
  { name: "Case Studies", link: "/case-studies" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

const secondaryLinks = [
  { name: "Services", link: "/services" },
  { name: "Testimonials", link: "/#testimonials" },
  { name: "Newsletter", link: "/#newsletter" },
];

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  const pathname = usePathname();

  const handleLinkClick = () => {
    onClose?.();
  };

  return (
    <div className="fixed h-[94vh] top-16 z-50 bg-white/95 backdrop-blur-xl flex flex-col lg:hidden">
      {/* Navigation Content */}
      <nav className="flex-1 overflow-y-auto px-6 pb-32">
        {/* Primary Section */}
        <div className="space-y-1 mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-outline mb-6">
            Explore
          </p>

          {primaryLinks.map((item, index) => {
            const isActive = pathname === item.link;

            return (
              <Link
                key={index}
                href={item.link}
                onClick={handleLinkClick}
                className="flex items-center justify-between group py-3"
              >
                <span
                  className={`text-4xl font-black -tracking-widest uppercase transition-all duration-300 ${
                    isActive
                      ? "text-primary-container translate-x-2"
                      : "text-on-background group-hover:translate-x-2 group-hover:text-primary-container"
                  }`}
                >
                  {item.name}
                </span>

                <span
                  className={`material-symbols-outlined transition-all ${
                    isActive
                      ? "text-primary-container"
                      : "opacity-0 group-hover:opacity-100 text-primary-container"
                  }`}
                >
                  arrow_outward
                </span>
              </Link>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-px bg-surface-container-highest w-full mb-10" />

        {/* Secondary Section */}
        <div className="grid grid-cols-1 gap-6 mb-12">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-outline mb-4">
              Deep Dive
            </p>

            <ul className="space-y-4">
              {secondaryLinks.map((link, index) => {
                const isActive = pathname === link.link;

                return (
                  <li key={index}>
                    <Link
                      href={link.link}
                      onClick={handleLinkClick}
                      className={`text-lg font-bold transition-colors ${
                        isActive
                          ? "text-primary-container"
                          : "text-on-surface hover:text-primary-container"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Contextual Card */}
        <div className="p-6 bg-surface-container-low rounded-xl relative overflow-hidden group">
          <div className="relative z-10">
            <h4 className="text-xl font-black text-on-background tracking-tight mb-2 uppercase">
              Ready for Growth?
            </h4>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
              Our architectural approach to digital strategy ensures your
              business doesn&apos;t just survive, but thrive.
            </p>
          </div>

          <div className="absolute -right-4 -bottom-4 opacity-10">
            <span className="material-symbols-outlined text-[120px]">
              architecture
            </span>
          </div>
        </div>
      </nav>

      {/* Footer CTA */}
      <div className="fixed bottom-0 left-0 w-full p-6 bg-white shadow-[0_-8px_40px_-12px_rgba(32,26,28,0.06)]">
        <Link
          href="/contact#proposal"
          onClick={handleLinkClick}
          className="w-full bg-primary-container text-on-secondary-container py-5 rounded-xl font-black text-sm uppercase tracking-widest shadow-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
        >
          <span>Request Proposal</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
