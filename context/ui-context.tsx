"use client";

import { createContext, useContext, useState } from "react";

type UIContextType = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const UIContext = createContext<UIContextType | null>(null);

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <UIContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);

  if (!context) {
    throw new Error("useUI must be used inside UIProvider");
  }

  return context;
}
