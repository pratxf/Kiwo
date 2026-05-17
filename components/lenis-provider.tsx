"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    let lenis: Lenis;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      lenis = new Lenis({
        duration: 1.1,
        smoothWheel: true,
        touchMultiplier: 1.2,
      });

      // Keep ScrollTrigger in sync with Lenis virtual scroll
      lenis.on("scroll", ScrollTrigger.update);

      // Drive Lenis from GSAP's ticker instead of our own RAF loop
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    };

    init();

    return () => {
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
