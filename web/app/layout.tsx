import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
 
import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from "@/providers/modal-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce",
  description: "An e-commerce website built with Next.js and TypeScript by Meet Parekh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ModalProvider/>           
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
