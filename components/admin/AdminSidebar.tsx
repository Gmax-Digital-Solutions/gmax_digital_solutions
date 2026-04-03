"use client";

import Link from "next/link";
import React from "react";

interface NavItem {
  label: string;
  icon: string;
  active?: boolean;
  link?: string;
}

const navItems: NavItem[] = [
  { label: "Dashboard", icon: "dashboard", link: "/admin", active: true },
  { label: "Insights", icon: "analytics", link: "/admin/insights" },
  { label: "Case Studies", icon: "inventory_2", link: "/admin/case-studies" },
  { label: "Messages", icon: "chat_bubble", link: "/admin/messages" },
  { label: "Subscribers", icon: "group", link: "/admin/subscribers" },
  { label: "Settings", icon: "settings", link: "/admin/settings" },
];

const setActive = (label: string) => {
  navItems.forEach((item) => {
    item.active = item.label === label;
  });
};

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-on-background shadow-2xl flex flex-col py-8 z-50">
      <div className="px-8 mb-10">
        <h1 className="text-white font-black tracking-tight text-lg uppercase">
          Gmax Admin
        </h1>
        <p className="text-stone-500 text-[10px] tracking-widest uppercase mt-1">
          Strategic Authority
        </p>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item, index) => (
          <a
            href={item.link}
            key={index}
            onClick={() => setActive(item.label)}
            className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-all duration-200 group ${
              item.active
                ? "bg-stone-800 text-white border-l-4 border-blue-500"
                : "text-stone-400 hover:text-white hover:bg-stone-800/50"
            }`}
          >
            <span className="material-symbols-outlined text-blue-500">
              {item.icon}
            </span>
            <span className="font-sans text-sm tracking-wide">
              {item.label}
            </span>
          </a>
        ))}
      </nav>

      <div className="px-6 mt-auto">
        <button className="w-full bg-primary text-white py-3 rounded-md text-sm font-semibold flex items-center justify-center gap-2 active:scale-95 transition-all">
          <span className="material-symbols-outlined text-sm">add</span>
          New Case Study
        </button>

        <div className="mt-6 pt-6 border-t border-stone-800">
          <div className="text-stone-400 hover:text-white hover:bg-stone-800/50 px-4 py-3 flex items-center gap-3 group cursor-pointer transition-all duration-200">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-sans text-sm tracking-wide">Logout</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
