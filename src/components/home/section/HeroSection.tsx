import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <section role="region">
      <Image
        src="https://example.com/hero.jpg"
        alt="Landscape picture"
        width={800}
        height={500}
        role="img"
      />
      <Image
        src="https://example.com/hero.jpg"
        alt="Landscape picture"
        width={800}
        height={500}
        role="img"
      />
      <Image
        src="https://example.com/hero.jpg"
        alt="Landscape picture"
        width={800}
        height={500}
        role="img"
      />
      <Image
        src="https://example.com/hero.jpg"
        alt="Landscape picture"
        width={800}
        height={500}
        role="img"
      />
      <Image
        src="https://example.com/hero.jpg"
        alt="Landscape picture"
        width={800}
        height={500}
        role="img"
      />
      <button data-testid="dot"></button>
      <button data-testid="dot"></button>
      <button data-testid="dot"></button>
      <button data-testid="dot"></button>
      <button data-testid="dot"></button>
    </section>
  );
}

export default HeroSection;
