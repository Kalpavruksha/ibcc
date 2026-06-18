"use client";
import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  as?: "div" | "section" | "li";
}

export default function ScrollReveal({ children, className = "", delay = 0, as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      // -60px: fires when element is 60px inside the viewport
      // Works on both desktop and mobile (small viewport)
      { threshold: 0, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay > 0 ? `delay-${delay}` : "";

  return (
    // @ts-expect-error - dynamic tag
    <Tag ref={ref} className={`scroll-reveal ${delayClass} ${className}`}>
      {children}
    </Tag>
  );
}
