import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BefNavbar from "@/components/BefNavbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/helper/ScrollTop";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600"] });

export const metadata = {
  title: "PT. Berlian Benzena Jaya",
  description:
    "PT. Berlian Benzena Jaya (BEBEJA) didirikan pada tahun 2022,dengan tujuan memberikan nilai tambah kepada pelanggankami dengan menyediakan bahan baku kimia yang berkualitastinggi dan juga layanan purna jual yang sempurna",
  keywords:
    "PT BEBEJA, PT Berlian Benzena Jaya, Bebeja,Kimia Terbaik, PT Berlian Benzena Jaya, Perusahaan Kimia, Perusahaan Di Grand Wisata, Kimia, Penjualan Kimia , infobebeja, perusahaan kimia terbaik, pt infobebeja",
  openGraph: {
    title: "PT. Berlian Benzena Jaya",
    description:
      "PT. Berlian Benzena Jaya (BEBEJA) didirikan pada tahun 2022,dengan tujuan memberikan nilai tambah kepada pelanggankami dengan menyediakan bahan baku kimia yang berkualitastinggi dan juga layanan purna jual yang sempurna",
    url: "https://upikshop.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <BefNavbar />
        {children}
        <ScrollToTop></ScrollToTop>
        <Footer />
      </body>
    </html>
  );
}
