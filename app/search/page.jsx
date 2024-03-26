"use client";
import {
  animateFlightCard,
  animateLogo,
  animateMenu,
  animateSearcher,
  animateSearcherContent,
  animteFilterItem,
} from "@/actions/animations";
import Checkbox from "@/components/Checkbox";
import Container from "@/components/Container";
import Dropdown from "@/components/Dropdown";
import Filter from "@/components/Filter";
import Navbar from "@/components/Navbar";
import Notification from "@/components/Notification";
import Searcher from "@/components/Searcher";
import FlightCard from "@/components/cards/FlightCard";
import FilterDrawer from "@/components/drawers/FilterDrawer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { gsap } from "gsap";
import { FilterIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const Searchpage = () => {
  const [filter, setFilterField] = useState([]);
  const timeline = useRef(gsap.timeline());
  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timeline.current;
      tl.add(animateMenu(), 0)
        .add(animateLogo(), 0)
        .add(animateSearcher(), 0)
        .add(animateSearcherContent(), 2)
        .add(animteFilterItem(), 2)
        .add(animateFlightCard(), 3);
    });
    return () => context.revert();
  }, []);
  return (
    <Container>
      <Navbar />
      <Searcher />
      <div className="flex sm:flex-row gap-3 flex-col justify-start sm:justify-between">
        <div className="w-full sm:w-[30%] lg:w-[27%] flex flex-col gap-3">
          <Notification />
          <div className="sm:hidden block">
            <FilterDrawer filter={filter} setFilterField={setFilterField}>
              <Button variant="outline" className=" w-full">
                <FilterIcon className="mr-2 h-4 w-4" />
                <span>Filtros</span>
              </Button>
            </FilterDrawer>
          </div>
          <div className="hidden md:block">
            <Filter filter={filter} setFilterField={setFilterField} />
          </div>
        </div>
        <div className="w-full sm:w-[70%] flex flex-row flex-wrap gap-1 lg:w-[73%]">
          <FlightCard />
          <FlightCard />
          <FlightCard />
          <FlightCard />
          <FlightCard />
          <FlightCard />
          <FlightCard />
          <FlightCard />
          <FlightCard />
          <FlightCard />
          <FlightCard />
          <FlightCard />
        </div>
      </div>
    </Container>
  );
};

export default Searchpage;
