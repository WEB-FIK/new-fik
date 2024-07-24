import React from "react";
import LogoSection from "@/components/Footer/LogoSection/LogoSection";
import ContactInfo from "@/components/Footer/ContactInfo/ContactInfo";
import AcademicLinks from "@/components/Footer/AcademicLinks/AcademicLinks";
import AboutLinks from "@/components/Footer/AboutLinks/AboutLinks";

function Footer() {
  return (
    <section className="w-full flex flex-col min-h-[800px] md:min-h-[720px] bg-black text-white p-6 space-y-10 md:flex-row">
      <div className="flex flex-col space-y-10 md:w-[50%] md:space-y-40 md:px-8">
        <LogoSection />
        <ContactInfo />
      </div>
      <div className="px-8 space-y-9 w-full flex flex-col text-white md:w-[50%] md:flex-row md:space-y-0 md:space-x-32">
        <AcademicLinks />
        <AboutLinks />
      </div>
    </section>
  );
}

export default Footer;