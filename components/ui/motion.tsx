import type { ReactNode } from "react";

interface MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

function classes(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

function delayedStyle(delay: number) {
  return delay ? { animationDelay: `${delay}s` } : undefined;
}

// CSS-only transforms keep the animation on the compositor: no animation
// library, scroll observers, or per-frame JavaScript is needed on mobile.
export function FadeIn({ children, className, delay = 0 }: MotionProps) {
  return <div className={classes("motion-reveal motion-reveal-right", className)} style={delayedStyle(delay)}>{children}</div>;
}

export function SlideInLeft({ children, className, delay = 0 }: MotionProps) {
  return <div className={classes("motion-reveal motion-reveal-left", className)} style={delayedStyle(delay)}>{children}</div>;
}

export function SlideInBottom({ children, className, delay = 0 }: MotionProps) {
  return <div className={classes("motion-reveal motion-reveal-up", className)} style={delayedStyle(delay)}>{children}</div>;
}

export function StaggerGroup({ children, className }: MotionProps) {
  return <div className={classes("motion-stagger", className)}>{children}</div>;
}

export function StaggerItem({ children, className }: Omit<MotionProps, "delay">) {
  return <div className={classes("motion-stagger-item", className)}>{children}</div>;
}
