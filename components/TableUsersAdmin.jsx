import React, { useEffect, useRef, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SearchIcon, XIcon } from "lucide-react";
import DeleteUser from "./DeleteUser";
import { gsap } from "gsap";
import { animateUsersPage } from "@/actions/animations";

const TableUsersAdmin = ({ data }) => {
  const [list, setList] = useState([]);
  const timeline = useRef(gsap.timeline());

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timeline.current;
      tl.add(animateUsersPage(), 0);
    });
    return () => context.revert();
  }, []);

  function lowercase(e) {
    return String(e).toLowerCase();
  }

  useEffect(() => {
    setList(data);
  }, []);

  function handleSearch(e) {
    if (!e.target.value) return setList(data);
    setList(
      data.filter(
        (item) =>
          lowercase(item.nome).includes(lowercase(e.target.value)) ||
          lowercase(item.email).includes(lowercase(e.target.value))
      )
    );
  }

  return (
    <>
      <div
        data-users-item
        className="flex w-full mb-3 max-w-sm items-center space-x-2"
      >
        <Input
          onChange={handleSearch}
          type="text"
          placeholder="Pesquisar nome ou email"
        />
        <Button type="submit" className="bg-black">
          <SearchIcon className="w-4 h-4" />
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow data-users-item>
            <TableHead className="w-[100px]">Nome</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Telefone</TableHead>
            <TableHead className="text-right">Deletar</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody data-users-item>
          {list.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell data-users-item className="font-medium w-[15%]">
                {invoice.nome}
              </TableCell>
              <TableCell>{invoice.email}</TableCell>
              <TableCell>{invoice.telefone}</TableCell>
              <TableCell className="text-right">
                <DeleteUser user={invoice} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </>
  );
};

export default TableUsersAdmin;
