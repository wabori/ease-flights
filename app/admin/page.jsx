"use client";
import {
  animateAdminTabs,
  animateLogo,
  animateMenu,
} from "@/actions/animations";
import Admin from "@/screens/Admin";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

const AdminPage = () => {
  const timeline = useRef(gsap.timeline());
  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timeline.current;
      tl.add(animateMenu(), 0).add(animateLogo(), 0).add(animateAdminTabs(), 0);
    });
    return () => context.revert();
  }, []);
  return (
    <div>
      <Admin />
    </div>
  );
};

export default AdminPage;
