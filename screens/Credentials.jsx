import { animateCardSign, animateLogo } from "@/actions/animations";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import { SignCard } from "@/components/cards/SignCard";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

const Credentials = () => {
  const timeline = useRef(gsap.timeline());
  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timeline.current;
      tl.add(animateCardSign(), 0).add(animateLogo(), 0);
    });
    return () => context.revert();
  }, []);
  return (
    <Container>
      <Navbar page="credentials" />
      <div className="w-full h-screen flex justify-center items-center">
        <SignCard />
      </div>
    </Container>
  );
};

export default Credentials;
