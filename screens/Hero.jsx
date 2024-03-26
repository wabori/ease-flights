import React, { useEffect, useRef } from "react";
import { Button } from "../components/ui/button";
import { gsap } from "gsap";
import { KeyIcon, Search } from "lucide-react";
import {
  animateLogo,
  animateMenu,
  animateSearchButton,
} from "@/actions/animations";
import Navbar from "../components/Navbar";
import SearchDrawer from "../components/drawers/SearchDrawer";
import Container from "@/components/Container";
import Link from "next/link";

const Hero = () => {
  return (
    <Container>
      <Navbar />
      <div className="fixed flex flex-row gap-3 items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <SearchDrawer>
          <Button
            data-button
            color="#ff0000"
            className="rounded-full  bg-black scale-x-150 lg:scale-100 hover:rotate-icon"
          >
            <Search data-button-content className="sm:mr-2 h-4 w-4 icon" />
            <span data-button-content className="sm:block ml-2 hidden">
              Pesquisar
            </span>
          </Button>
        </SearchDrawer>
        <Link href={"/admin"}>
          <Button
            data-button
            variant="outline"
            className=" rounded-full shadow-md hover:rotate-icon"
          >
            <KeyIcon data-button-content className="mr-2 w-4 h-4 icon" />
            <span data-button-content>Admin</span>
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Hero;
