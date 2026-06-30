"use client";

import { useEffect, useRef, useState } from "react";

const interactiveSelector =
  "a, button, [role='button'], input, textarea, select, summary, label, [data-cursor='interactive']";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const dot = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0, scale: 1 });
  const hovered = useRef(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const syncEnabled = () => setEnabled(media.matches);
    syncEnabled();

    const updateMouse = (event: MouseEvent) => {
      mouse.current = { x: event.clientX, y: event.clientY };
    };

    const animate = () => {
      const target = document.elementFromPoint(mouse.current.x, mouse.current.y) as HTMLElement | null;
      hovered.current = Boolean(target?.closest(interactiveSelector));

      dot.current.x += (mouse.current.x - dot.current.x) * 0.35;
      dot.current.y += (mouse.current.y - dot.current.y) * 0.35;
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      ring.current.scale += ((hovered.current ? 2 : 1) - ring.current.scale) * 0.14;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.current.x - 4}px, ${dot.current.y - 4}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x - 20}px, ${ring.current.y - 20}px, 0) scale(${ring.current.scale})`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    if (!media.matches) {
      return () => {};
    }

    document.addEventListener("mousemove", updateMouse);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      document.removeEventListener("mousemove", updateMouse);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="custom-cursor-layer pointer-events-none fixed inset-0 z-[9999]"
    >
      <div
        ref={ringRef}
        className="custom-cursor-ring absolute left-0 top-0 rounded-full border border-accent/90"
      />
      <div
        ref={dotRef}
        className="custom-cursor-dot absolute left-0 top-0 rounded-full bg-accent"
      />
    </div>
  );
}
