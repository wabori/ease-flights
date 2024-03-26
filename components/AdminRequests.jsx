import React, { useEffect, useRef } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import RequestUserCard from "./cards/RequestUserCard";
import { gsap } from "gsap";
import { animateRequestsPage } from "@/actions/animations";

const AdminRequests = () => {
  const timeline = useRef(gsap.timeline());

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timeline.current;
      tl.add(animateRequestsPage(), 0);
    });
    return () => context.revert();
  }, []);
  return (
    <div className="flex flex-row flex-wrap gap-2 w-full">
      <RequestUserCard
        user={{
          nome: "Álex Fernando",
          email: "alex@gmail.com",
          telefone: "+55 71 98675-8166",
        }}
      />
      <RequestUserCard
        user={{
          nome: "Álex Fernando",
          email: "alex@gmail.com",
          telefone: "+55 71 98675-8166",
        }}
      />
      <RequestUserCard
        user={{
          nome: "Álex Fernando",
          email: "alex@gmail.com",
          telefone: "+55 71 98675-8166",
        }}
      />
      <RequestUserCard
        user={{
          nome: "Álex Fernando",
          email: "alex@gmail.com",
          telefone: "+55 71 98675-8166",
        }}
      />
      <RequestUserCard
        user={{
          nome: "Álex Fernando",
          email: "alex@gmail.com",
          telefone: "+55 71 98675-8166",
        }}
      />
      <RequestUserCard
        user={{
          nome: "Álex Fernando",
          email: "alex@gmail.com",
          telefone: "+55 71 98675-8166",
        }}
      />
      <RequestUserCard
        user={{
          nome: "Álex Fernando",
          email: "alex@gmail.com",
          telefone: "+55 71 98675-8166",
        }}
      />
    </div>
  );
};

export default AdminRequests;
