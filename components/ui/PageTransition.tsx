"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function PageTransition({ children, className }: { children: ReactNode; className?: string }) {
  const pathname = usePathname();

  // A keyed wrapper restarts the entry animation after each App Router navigation.
  return <div key={pathname} className={["page-transition", className].filter(Boolean).join(" ")}>{children}</div>;
}
