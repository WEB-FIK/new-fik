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
    primary: `bg-${bgColor} text-white`,
    whiteWithPrimaryBorder: `bg-white border border-primary-500 text-primary-500`,
  };

  return (
    <Link href={path} className={`${baseClasses} ${variantClasses[variant]} w-[${width}]`}>
        <p className="text-[16px] font-medium">{text}</p>
    </Link>
  );
}

export default Button;
