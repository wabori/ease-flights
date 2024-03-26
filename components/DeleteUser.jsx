"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight, ArrowRightFromLine, Bell, XIcon } from "lucide-react";
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

const DeleteUser = ({
  user = {
    nome: "Álex",
    email: "alex.wabori@gmail.com",
    telefone: "+55 71 98675-8166",
  },
}) => {
  const [valor, setValor] = useState(50);
  const { toast } = useToast();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <XIcon className="w-4 h-4 text-red-500" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex flex-col gap-1">Confirmar</DialogTitle>
          <DialogDescription className="mb-2">
            Informações do usuário que deseja deletar
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-1 justify-center items-center">
          <Badge>{user.nome}</Badge>
          <Badge>{user.email}</Badge>
          <Badge>{user.telefone}</Badge>
        </div>
        <DialogFooter>
          <Button
            className="bg-red-600 hover:bg-red-400 w-full"
            onClick={() => {
              toast({
                variant: "destructive",
                title: "Usuário deletado com sucesso.",
              });
            }}
            type="submit"
          >
            Confirmar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteUser;
