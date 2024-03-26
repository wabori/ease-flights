import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

const FlightCard = () => {
  return (
    <Card data-flight-card className="w-full h-fit lg:w-[49.4%] xl:w-[32.94%] ">
      <CardHeader>
        <CardTitle>R$ 600</CardTitle>
        <CardDescription>Ida e volta por adulto sem taxas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row text-[14px] justify-between">
            <span className="font-bold">Adulto</span>
            <span className="justify-self-end">R$ 600,28</span>
          </div>
          <div className="flex flex-row text-[14px] justify-between">
            <span className="font-bold">Taxas e encargos</span>
            <span className="font-bold justify-self-end">R$ 121,29</span>
          </div>
          <div className="flex flex-row text-[14px] justify-between">
            <span className="font-bold">Valor total</span>
            <span className="font-bold justify-self-end">R$ 721,57</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="w-full">
        <Button className="bg-black w-full text-white">Ver mais</Button>
      </CardFooter>
    </Card>
  );
};

export default FlightCard;
