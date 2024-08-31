import React from "react";
import { AccordionItem, AccordionTrigger, AccordionContent } from "./Accordion";

interface AccordionItemComponentProps {
  id: number;
  title: string;
  content: string;
}

export const AccordionItemComponent: React.FC<AccordionItemComponentProps> = ({
  id,
  title,
  content,
}) => (
  <AccordionItem
    value={`item-${id}`}
    className="border border-primary-500 mb-2 p-2 rounded-[16px] md:p-12"
  >
    <AccordionTrigger className="text-left font-bold text-[14px] md:text-[24px]">
      {title}
    </AccordionTrigger>
    <AccordionContent className="md:text-[20px]">{content}</AccordionContent>
  </AccordionItem>
);
