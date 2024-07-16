import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  path: string;
  bgColor: string;
  width?: string;
  variant?: "primary" | "whiteWithPrimaryBorder";
}

function Button({ text, path, bgColor, width = "100px", variant = "primary" }: ButtonProps) {
  const baseClasses = `text-center rounded-[4px] h-[50px] flex items-center justify-center px-4`;
  
  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-white hover:border-primary-500 hover:border hover:text-primary-500 transform transition-all ease-in-out duration-300',
    whiteWithPrimaryBorder: `bg-white border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transform transition-all ease-in-out duration-300`,
  };

  return (
    <Link href={path} className={`${baseClasses} ${variantClasses[variant]} w-[${width}]`}>
        <p className="text-[16px] font-bold">{text}</p>
    </Link>
  );
}

export default Button;
