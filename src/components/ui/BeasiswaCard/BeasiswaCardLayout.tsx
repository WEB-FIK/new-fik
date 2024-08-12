import React from "react";

interface BeasiswaCardLayoutProps {
  children: React.ReactNode;
}

const BeasiswaCardLayout: React.FC<BeasiswaCardLayoutProps> = ({
  children,
}) => (
  <article className="group w-full min-h-[350px] flex flex-col justify-between border rounded-[12px] p-5 space-y-3 hover:border hover:border-primary-500 transform transition-all hover:shadow-xl duration-500 ease-in-out md:space-y-6">
    {children}
  </article>
);

export default BeasiswaCardLayout;
