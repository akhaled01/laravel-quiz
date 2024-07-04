import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "laravel-quiz",
  description: "by akhaled and fatabbas",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body>
          {children}
          <Toaster />
        </body>
      </html>
    </ReactQueryProvider>
  );
}
