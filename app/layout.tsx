import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300','400','500','600', '700'],
  variable: '--font-poppins',
})


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iT Central",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
