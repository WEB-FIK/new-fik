import AllAgenda from "@/components/Agenda/AllAgenda/AllAgenda";
import Header from "@/components/Agenda/Header/Header";
import IncomingAgenda from "@/components/Agenda/IncomingAgenda/IncomingAgenda";
import React from "react";

function page() {
  return (
    <div>
      <Header />
      <IncomingAgenda />
      <AllAgenda />
    </div>
  );
}

export default page;
