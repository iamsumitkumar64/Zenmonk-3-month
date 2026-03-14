import type { Metadata } from "next";
import "./globals.css";
import NotistackProvider from "@/layout/noti-stack";
import { StyledEngineProvider } from '@mui/material/styles';

export const metadata: Metadata = {
  title: "Auth Site",
  description: "Mine Auth Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledEngineProvider injectFirst>
          <NotistackProvider>
            {children}
          </NotistackProvider>
        </StyledEngineProvider>
      </body>
    </html>
  );
}
