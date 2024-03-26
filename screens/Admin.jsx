import AdminTabs from "@/components/AdminTabs";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import TableUsersAdmin from "@/components/TableUsersAdmin";
import React from "react";

const Admin = () => {
  return (
    <Container>
      <Navbar />
      <AdminTabs />
    </Container>
  );
};

export default Admin;
