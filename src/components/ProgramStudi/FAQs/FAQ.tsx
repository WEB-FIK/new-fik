import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";

const faqDatas = [
  {
    id: 1,
    title:
      "Capaian Pembelajaran Program Studi Sistem Informasi Program Sarjana",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: 2,
    title: "Capaian Pelajaran Fakultas Ilmu Komputer UPNVJ",
    content:
      "Yes. It comes with default styles that match the other components&apos; aesthetic.",
  },
  {
    id: 3,
    title: "Capaian Pelajaran UPNVJ",
    content:
      "Yes. It comes with default styles that match the other components&apos; aesthetic.",
  },
];

function FAQ() {
  return (
    <section className="min-h-[200px] w-full px-4 py-8 flex flex-col justify-center space-y-5 md:px-[100px] md:min-h-[400px]">
        <SectionHeader
                title="Peminatan"
                subtitle="Peminatan yang terdapat pada Program Sarjana Sistem Informasi Fakultas komputer UPNVJ."
                textAlign="left"
            />
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-b border-primary-500">
          <AccordionTrigger className="text-left font-semibold">Apa Perbedaan Diploma dan Sarjana Sistem Informasi FIK UPNV?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b border-primary-500">
          <AccordionTrigger className="text-left font-semibold">Apa Perbedaan Diploma dan Sarjana Sistem Informasi FIK UPNV?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b border-primary-500">
          <AccordionTrigger className="text-left font-semibold">Apa Perbedaan Diploma dan Sarjana Sistem Informasi FIK UPNV?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export default FAQ;
