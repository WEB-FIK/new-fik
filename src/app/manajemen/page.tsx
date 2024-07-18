import ManajemenHeader from "@/components/Manajemen/Header/Header";
import StrukturDekanat from "@/components/Manajemen/StrukturDekanat/StrukturDekanat";
import StrukturKaprodi from "@/components/Manajemen/StrukturKaprodi/StrukturKaprodi";
import StrukturKepalaLab from "@/components/Manajemen/StrukturKepalaLab/StrukturKepalaLab";
import StrukturTataUsaha from "@/components/Manajemen/StrukturTataUsaha/StrukturTataUsaha";
import React from "react";

function page() {
  return (
    <div>
      <ManajemenHeader />
      <StrukturDekanat />
      <StrukturKaprodi/>
      <StrukturTataUsaha/>
      <StrukturKepalaLab/>
    </div>
  );
}

export default page;
