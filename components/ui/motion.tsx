import type { ReactNode } from "react";

interface MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Rendering each section immediately avoids client-side hydration and dozens of
// scroll observers that were causing dropped frames on mobile devices.
export function FadeIn({ children, className }: MotionProps) {
  return <div className={className}>{children}</div>;
}

export function SlideInLeft({ children, className }: MotionProps) {
  return <div className={className}>{children}</div>;
}

export function SlideInBottom({ children, className }: MotionProps) {
  return <div className={className}>{children}</div>;
}

export function StaggerGroup({ children, className }: MotionProps) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({ children, className }: Omit<MotionProps, "delay">) {
  return <div className={className}>{children}</div>;
}

export function PageTransition({ children, className }: Omit<MotionProps, "delay">) {
  return <div className={className}>{children}</div>;
}
