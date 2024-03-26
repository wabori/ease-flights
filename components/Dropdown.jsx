"use client";
import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Button } from "./ui/button";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Separator } from "./ui/separator";

const Dropdown = ({ label, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <Collapsible
      data-filter-item
      open={isOpen}
      onOpenChange={setIsOpen}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold">{label}</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            {isOpen ? (
              <ChevronUpIcon className="h-4 w-4" />
            ) : (
              <ChevronDownIcon className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">{children}</CollapsibleContent>
      <Separator className="my-1" />
    </Collapsible>
  );
};

export default Dropdown;
