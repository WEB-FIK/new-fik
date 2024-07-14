import CarouselHomepage from "@/components/Homepage/Carousel/CarouselHomepage";
import ProgramStudi from "@/components/Homepage/ProgramStudi/ProgramStudi";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <CarouselHomepage />
      <ProgramStudi/>
      <section role="region"></section>
      <section role="region"></section>
      <section role="region"></section>
      <section role="region"></section>
    </div>
  );
}
