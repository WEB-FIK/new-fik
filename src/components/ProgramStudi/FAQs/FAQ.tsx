import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion/Accordion";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import { faqDatas } from "@/data/dataFAQ";

function FAQ() {
  return (
    <section className="min-h-[200px] w-full px-4 py-8 flex flex-col justify-center space-y-5 md:px-[100px] md:min-h-[400px]">
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Pertanyaan Seputar Program Sarjana Sistem Informasi Fakultas Ilmu Komputer UPNVJ."
        textAlign="left"
      />
      <Accordion type="single" collapsible className="w-full">
        {faqDatas.map((data) => (
          <AccordionItem
            key={data.id}
            value={`item-${data.id}`}
            className="border-b border-primary-500 py-4"
          >
            <AccordionTrigger className="text-left font-semibold md:text-[24px]">
              {data.title}
            </AccordionTrigger>
            <AccordionContent className="text-[20px]">
              {data.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default FAQ;
