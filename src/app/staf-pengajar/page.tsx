import StafPengajarHeader from "@/components/StafPengajar/Header/Header";
import StafPengajarList from "@/components/StafPengajar/StafPengajarList/StafPengajarList";
import React from "react";

function page() {
  return (
    <div className="w-full">
      <StafPengajarHeader />
      <StafPengajarList />
    </div>
  );
}

export default page;
