import BeasiswaHeader from "@/components/Beasiswa/Header/Header";
import JenisBeasiswa from "@/components/Beasiswa/BeasiswaTypes/BeasiswaTypes";
import React from "react";

function page() {
  return (
    <div>
      <BeasiswaHeader />
      <JenisBeasiswa />
    </div>
  );
}

export default page;
