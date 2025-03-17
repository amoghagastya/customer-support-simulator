import type { Metadata } from "next";
import Image from 'next/image';
import UVLogo from '@/public/UVHorizontal-White.svg';
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Ultravox Demo",
  description: "Demonstration of using the Ultravox API to create a call with an AI agent.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
