import React from "react";
import { Accordion } from "@/components/ui/Accordion/Accordion";
import { AccordionItemComponent } from "@/components/ui/Accordion/AccordionItem";
import { accordionDatas } from "@/data/dataCPL";

export function AccordionProgramStudi() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full min-h-[200px] text-primary-500 md:space-y-10"
    >
      {accordionDatas.map((data) => (
        <AccordionItemComponent
          key={data.id}
          id={data.id}
          title={data.title}
          content={data.content}
        />
      ))}
    </Accordion>
  );
}
