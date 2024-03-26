"use client";
import {
  animateLogo,
  animateMenu,
  animateSearchButton,
  animateSearchButtonContent,
  animateSearcherContent,
} from "@/actions/animations";
import Hero from "@/screens/Hero";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

const Home = () => {
  const timeline = useRef(gsap.timeline());
  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timeline.current;
      tl.add(animateSearchButton(), 0)
        .add(animateSearchButtonContent(), 1)
        .add(animateMenu(), 0)
        .add(animateLogo(), 0);
    });
    return () => context.revert();
  }, []);
  return (
    <main>
      <Hero />
    </main>
  );
};

export default Home;
