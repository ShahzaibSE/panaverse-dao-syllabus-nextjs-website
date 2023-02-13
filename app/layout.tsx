"use client";
import "./globals.css";
import ChakraWrapper from "@/components/chakra";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      {/* <head /> */}
      <body>
        <ChakraWrapper>
          <header>
            <Header />
          </header>
          {children}
          <footer>
            <Footer />
          </footer>
        </ChakraWrapper>
      </body>
    </html>
  );
}
