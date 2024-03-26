import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import Filter from "../Filter";

const FilterDrawer = ({ filter, setFilterField, children }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Passagens Aéreas</DrawerTitle>
          </DrawerHeader>
          <div className="py-1 px-4 ">
            <Filter filter={filter} setFilterField={setFilterField} />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default FilterDrawer;
