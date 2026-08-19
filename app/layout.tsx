import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/layout/Header";
import CategoryNav from "@/components/layout/CategoryNav";
import Footer from "@/components/layout/Footer";
import TopBar from "@/components/layout/TopBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Dokan | Online Shopping for Electronics, Fashion and More",
    template: "%s | Dokan"
  },
  description:
    "Shop electronics, fashion, home goods, beauty products and more on Dokan. Wide selection, fair prices and fast delivery across Bangladesh.",
  keywords: [
    "online shopping",
    "ecommerce Bangladesh",
    "buy electronics online",
    "fashion online",
    "Dokan"
  ],
  openGraph: {
    title: "Dokan | Online Shopping for Electronics, Fashion and More",
    description:
      "Shop electronics, fashion, home goods, beauty products and more on Dokan.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased text-ink flex min-h-screen flex-col">
        <CartProvider>
          <TopBar />
          <Header />
          <CategoryNav />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
