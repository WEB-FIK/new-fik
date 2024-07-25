import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  const accordionDatas = [
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
  
  export function AccordionDemo() {
    return (
      <Accordion
        type="single"
        collapsible
        className="w-full min-h-[200px] text-primary-500"
      >
        {accordionDatas.map((data) => (
          <AccordionItem
            key={data.id}
            value={`item-${data.id}`}
            className="border border-primary-500 mb-2 p-2 rounded-[16px]"
          >
            <AccordionTrigger className="text-left font-bold text-[14px]">
              {data.title}
            </AccordionTrigger>
            <AccordionContent>
              {data.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }
  