import { Mail, Map, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-[5rem] w-[100%] pb-[3rem] bg-gray-100 shadow-black/20 shadow-sm px-6 md:px-20 lg:px-36">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40 ">
        <div>
          
          <div className="overflow-hidden lg:w-full w-[25vh]">
            <Image
              alt="img"
              src={"/bebeja.webp"}
              width={240}
              height={240}
            ></Image>
          </div>
          
          <h1 className="text-base mt-[0.5rem] font-normal text-black/70 opacity-70  ">
            perusahaan yang bergerak di bidang jasa penjualan kimia. Selalu siap
            untuk Produk baru dan kolaborasi yang menantang
          </h1>
        </div>
        <div className="md:mx-auto">
          <h1 className="text-black/70 font-semibold mb-[1.4rem] text-lg ">
            Link Cepat
          </h1>
          <Link href="/" passHref>
            <p className="text-base text-black/70 opacity-80 mb-[1rem] cursor-pointer hover:text-primary ">
              Beranda
            </p>
          </Link>
          <Link href="/tentang" passHref>
            <p className="text-base text-black/70 opacity-80 mb-[1rem] cursor-pointer hover:text-primary ">
              Tentang
            </p>
          </Link>

          <Link href="/produk" passHref>
            <p className="text-base text-black/70 opacity-80 mb-[1rem] cursor-pointer hover:text-primary ">
              Produk
            </p>
          </Link>
          <Link href="/kontak" passHref>
            <p className="text-base text-black/70 opacity-80 mb-[1rem] cursor-pointer hover:text-primary ">
              Kontak
            </p>
          </Link>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-black/70  font-semibold mb-[1.4rem] text-lg ">
            Alamat
          </h1>
          <div className="gap-4 flex flex-col">
            <div className="flex flex-row justify-beetwen items-center gap-5">
              <div className="flex items-center justify-center">
                <Mail
                  stroke="white"
                  strokeWidth={1}
                  fill="gray"
                  className="text-black/70"
                />
              </div>
              <p className="lg:text-base text-black/70 ">
                infobebeja@gmail.com
              </p>
            </div>
            <div className="flex flex-row justify-beetwen items-start gap-5">
              <div className="flex items-center justify-center">
                <Phone
                  stroke="white"
                  strokeWidth={1}
                  fill="gray"
                  className="text-black/70"
                />
              </div>
              <div className="flex flex-col">
                <p className="lg:text-base text-black/70 ">
                  +62 822-4972-5551 (Ilham/Admin)
                </p>
                <p className="lg:text-base text-black/70 ">
                  +62 852-2217-3322 (GunHarfi/Marketing)
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-beetwen items-start justify-start gap-5">
              <div className="flex items-center justify-center">
                <Map stroke="white" strokeWidth={1} fill="gray" className="" />
              </div>
              <p className=" lg:text-base text-black/70 ">
                Ruko Garden Hous HB 1 No.7 Grand Wisata Bekasi
              </p>
            </div>
            
          </div>
        </div>
      </div>
      <div className="mt-[1.4rem]  mx-auto text-black/70   opacity-70 ">
        &#169; 2025 PT. Berlian Benzena Jaya
      </div>
    </div>
  );
};

export default Footer;
