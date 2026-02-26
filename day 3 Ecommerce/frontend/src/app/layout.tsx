import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Birwal Myntra",
  description: "Shop right now ! Better Deals Ahead",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
