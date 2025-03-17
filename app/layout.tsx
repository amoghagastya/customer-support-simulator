import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
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
      <body>{children}
      <Analytics />
      </body>
    </html>
  )
}
