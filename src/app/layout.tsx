import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar/Navbar";
const plusJakartaSans = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fakultas Ilmu Komputer",
  description:
    "Fakultas Ilmu Komputer Universitas Pembangunan Nasional Veteran Jakarta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} bg-white overflow-x-hidden`}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
