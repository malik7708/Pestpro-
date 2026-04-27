"use client";

import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { useSyncExternalStore, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, amount: 0.18 };

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

interface MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const emptySubscribe = () => () => {};

function useMotionReady() {
  const prefersReducedMotion = useReducedMotion();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  return { mounted, prefersReducedMotion };
}

export function FadeIn({ children, className, delay = 0 }: MotionProps) {
  const { mounted, prefersReducedMotion } = useMotionReady();
  const motionEnabled = mounted && !prefersReducedMotion;

  if (!motionEnabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      key="fade-in-ready"
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUpVariants}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({ children, className, delay = 0 }: MotionProps) {
  const { mounted, prefersReducedMotion } = useMotionReady();
  const motionEnabled = mounted && !prefersReducedMotion;

  if (!motionEnabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      key="stagger-group-ready"
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: Omit<MotionProps, "delay">) {
  const { mounted, prefersReducedMotion } = useMotionReady();
  const motionEnabled = mounted && !prefersReducedMotion;

  if (!motionEnabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div key="stagger-item-ready" className={className} variants={fadeUpVariants}>
      {children}
    </motion.div>
  );
}

export function PageTransition({ children, className }: Omit<MotionProps, "delay">) {
  const pathname = usePathname();
  const { mounted, prefersReducedMotion } = useMotionReady();
  const motionEnabled = mounted && !prefersReducedMotion;

  if (!motionEnabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className={className}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.45, ease }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
