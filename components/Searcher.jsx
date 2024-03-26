import { ArrowRight, Search, SearchCodeIcon } from "lucide-react";
import React from "react";
import { Badge } from "./ui/badge";
import SearchDrawer from "./drawers/SearchDrawer";

const Searcher = () => {
  return (
    <div data-searcher className="bg-black w-full mb-4 p-5">
      <div
        data-searcher-content
        className="text-white flex flex-row items-center"
      >
        <div className="w-10 h-10 mr-5 flex duration-200 hover:opacity-75 cursor-pointer justify-center items-center">
          <SearchDrawer>
            <Search color="white" />
          </SearchDrawer>
        </div>
        <div className="flex flex-col gap-2 cursor-default">
          <div className="flex flex-row justify-center sm:justify-start gap-1 items-center">
            <Badge variant={"secondary"}>Salvador (SSA)</Badge>
            <ArrowRight className="text-white" size={14} />
            <Badge variant={"secondary"}>Curitiba (CWB)</Badge>
          </div>
          <div className="flex flex-row justify-center sm:justify-start gap-1 items-center">
            <Badge className={"bg-yellow-400"}>1 adulto</Badge>
            <Badge className={"bg-sky-400"}>3 crianças</Badge>
            <Badge className={"bg-slate-400"}>econômica</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searcher;
