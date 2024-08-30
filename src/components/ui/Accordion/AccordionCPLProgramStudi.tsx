import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion/Accordion";
import { accordionDatas } from "@/data/dataCPL";

export function AccordionProgramStudi() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full min-h-[200px] text-primary-500 md:space-y-10"
    >
      {accordionDatas.map((data) => (
        <AccordionItem
          key={data.id}
          value={`item-${data.id}`}
          className="border border-primary-500 mb-2 p-2 rounded-[16px] md:p-12"
        >
          <AccordionTrigger className="text-left font-bold text-[14px] md:text-[24px]">
            {data.title}
          </AccordionTrigger>
          <AccordionContent className="md:text-[20px]">
            {data.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
