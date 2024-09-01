import Agenda from "@/components/Homepage/Agenda/Agenda";
import Berita from "@/components/Homepage/Berita/Berita";
import CarouselHomepage from "@/components/Homepage/Carousel/CarouselHomepage";
import OurValues from "@/components/Homepage/OurValues/OurValues";
import Partner from "@/components/Homepage/Partner/Partner";
import ProgramStudi from "@/components/Homepage/ProgramStudi/ProgramStudi";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden min-h-screen">
      <CarouselHomepage />
      <ProgramStudi />
      <Berita />
      <OurValues />
      <Agenda />
      <Partner />
    </div>
  );
}
