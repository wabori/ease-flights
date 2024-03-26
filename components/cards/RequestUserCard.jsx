import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { AlertDialogTrigger } from "../ui/alert-dialog";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const RequestUserCard = ({ user }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card
          data-requests-item
          className="shadow-md w-full hover:opacity-75 cursor-pointer sm:w-[23.8%] md:w-[24%]"
        >
          <CardHeader>
            <CardTitle className="text-[18px] -mb-2">{user.nome}</CardTitle>
            <CardDescription className="text-[15px]">
              {user.email}
            </CardDescription>
          </CardHeader>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex flex-col gap-1">Confirmar</DialogTitle>
          <DialogDescription className="mb-2">
            O que deseja fazer com este usuário?
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-1 justify-center items-center">
          <Badge>{user.nome}</Badge>
          <Badge>{user.email}</Badge>
          <Badge>{user.telefone}</Badge>
        </div>
        <DialogFooter className={"flex flex-row gap-2 justify-between"}>
          <Button
            className="bg-green-600 hover:bg-green-400 w-full"
            onClick={() => {
              toast({
                title: "Usuário aprovado com sucesso.",
              });
            }}
            type="submit"
          >
            Aprovar
          </Button>
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
            Negar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RequestUserCard;
