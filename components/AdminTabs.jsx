import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import TableUsersAdmin from "./TableUsersAdmin";
import AdminRequests from "./AdminRequests";

const AdminTabs = () => {
  const invoices = [
    {
      nome: "Álex Fernando",
      email: "alex@gmail.com",
      telefone: "+55 71 98675-8166",
    },
    {
      nome: "Gabriel Lima",
      email: "gabriel@gmail.com",
      telefone: "+55 71 98675-8166",
    },
    {
      nome: "Lucas Alves",
      email: "lucasalves@gmail.com",
      telefone: "+55 71 98675-8166",
    },
  ];
  return (
    <Tabs defaultValue="users">
      <TabsList data-admin-tabs className="grid w-fit  grid-cols-2">
        <TabsTrigger value="requests">Solicitações</TabsTrigger>
        <TabsTrigger value="users">Usuários</TabsTrigger>
      </TabsList>
      <TabsContent value="requests">
        <AdminRequests />
      </TabsContent>
      <TabsContent value="users">
        <TableUsersAdmin data={invoices} />
      </TabsContent>
    </Tabs>
  );
};

export default AdminTabs;
