"use client";

import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { useSyncExternalStore, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, amount: 0.18 };

const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: -28, y: 10 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1, ease },
  },
};

const slideBottomVariants: Variants = {
  hidden: { opacity: 0, y: 28, x: 0 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 1, ease },
  },
};

const staggerBottomVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
      duration: 1,
      ease,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, x: -18, y: 18 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1, ease },
  },
};

const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
      duration: 1,
      ease,
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
      transition={{ duration: 1, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export function SlideInLeft({ children, className, delay = 0 }: MotionProps) {
  const { mounted, prefersReducedMotion } = useMotionReady();
  const motionEnabled = mounted && !prefersReducedMotion;

  if (!motionEnabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={slideLeftVariants}
      transition={{ duration: 1, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export function SlideInBottom({ children, className, delay = 0 }: MotionProps) {
  const { mounted, prefersReducedMotion } = useMotionReady();
  const motionEnabled = mounted && !prefersReducedMotion;

  if (!motionEnabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerBottomVariants}
      transition={{ duration: 1, ease, delay }}
    >
      <motion.div variants={slideBottomVariants}>{children}</motion.div>
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
      transition={{ delay, duration: 1, ease }}
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
    <motion.div
      key="stagger-item-ready"
      className={className}
      variants={fadeUpVariants}
      transition={{ duration: 1, ease }}
    >
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
        initial={{ opacity: 0, x: -18, y: 18 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: 18, y: -12 }}
        transition={{ duration: 1, ease }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
