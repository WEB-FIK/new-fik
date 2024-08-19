import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import SwiperTestimonial from "@/components/ui/SwiperTestimonial/SwiperTestimonial";
import React from "react";

function Testimonial() {
  return (
    <section className="min-h-screen w-full px-4 py-8 flex flex-col justify-center space-y-5 gap-x-3 md:px-[100px] md:min-h-[400px]">
      <SectionHeader
        title="Testimoni Mahasiswa"
        subtitle="Testimoni Mahasiswa  Fakultas Ilmu Komputer UPNVJ setelah mengikuti organisasi dan kepanitiaan yang ada."
        textAlign="left"
      />
      <SwiperTestimonial />
    </section>
  );
}

export default Testimonial;
