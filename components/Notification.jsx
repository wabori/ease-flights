"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight, ArrowRightFromLine, Bell } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Slider } from "./ui/slider";
import { useToast } from "./ui/use-toast";

const Notification = ({ onClick }) => {
  const [valor, setValor] = useState(50);
  const { toast } = useToast();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          data-filter-item
          variant="outline"
          className=" w-full"
          onClick={() => {
            console.log("a");
          }}
        >
          <Bell className="mr-2 h-4 w-4" />
          <span>Receber alertas de preço</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex flex-col gap-1">
            Alerta de Passagem
            <div className="flex my-2 flex-row justify-center sm:justify-start gap-3 items-center">
              <Badge variant={"secondary"}>Salvador (SSA)</Badge>
              <ArrowRight className="text-gray-700" size={14} />
              <Badge variant={"secondary"}>Curitiba (CWB)</Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="mb-2">
            Iremos te enviar um e-mail quando aparecer uma passagem no preço
            abaixo
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-row justify-between items-center">
          <Badge variant={"secondary"}>R$0</Badge>
          <Badge>R${valor}</Badge>
          <Badge variant={"secondary"}>R$1500</Badge>
        </div>
        <Slider
          defaultValue={[valor]}
          onValueChange={setValor}
          max={1500}
          step={1}
        />

        <DialogFooter>
          <Button
            className="bg-black w-full"
            onClick={() => {
              console.log("teste");
              toast({
                title: "Alerta configurado",
                description:
                  "Iremos te notificar assim que aparecer a passagem que deseja",
              });
            }}
            type="submit"
          >
            Me alerte!
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Notification;
