import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { MinusIcon, PlusIcon, Search } from "lucide-react";
import SearchForm from "../forms/SearchForm";

const SearchDrawer = ({ children }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Passagens Aéreas</DrawerTitle>
          </DrawerHeader>
          <div className="py-1 px-4 ">
            <SearchForm />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default SearchDrawer;
