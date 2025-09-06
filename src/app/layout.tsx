import type { Metadata } from "next";
import "@/ui/styles/globals.css";
import { oswaldFont } from "@/ui/fonts";
import Header from "@/ui/components/Header";

export const metadata: Metadata = {
  title: "Project Earth",
  description: "Explore The World!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswaldFont.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
