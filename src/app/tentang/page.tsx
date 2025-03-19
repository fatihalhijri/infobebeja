"use client";

import Hero from "@/components/Hero";
import {  CheckCircle, Eye, Target } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
 

  return (
    <div>
      <Hero
        img="/img-bebeja-2.jpg"
        judul="Tentang Kami"
        subJudul="tentang"
        posisi="30%"
      />

      {/* Content */}
      <div className="h-full w-full lg:py-10 py-10 px-6 md:px-20 lg:px-36">
        {/* Tentang Kami */}
        <div className="text-center pb-6">
          <h3 className="lg:text-3xl text-2xl font-semibold uppercase">
            Tentang Perusahaan
          </h3>
          <hr className="border w-20 border-blue-400 rounded-full mx-auto border-dashed" />
        </div>

        {/* Company Description */}
        <div className="w-full flex flex-col-reverse lg:flex-row items-start justify-between  lg:gap-10 lg:py-12">
          <div className="xl:w-1/2 lg:w-2/3 text-justify">
            <h3 className="xl:text-2xl lg:text-xl md:text-lg text-lg  text-black/80 font-semibold pb-3">
              Didirikan Pada Tahun 2022
            </h3>
            <p className="xl:text-lg lg:text-base font-medium text-black/60">
              PT. Berlian Benzena Jaya (BEBEJA) didirikan pada tahun 2022,
              dengan tujuan memberikan nilai tambah kepada pelanggan kami dengan
              menyediakan bahan baku kimia yang berkualitas tinggi dan juga
              layanan purna jual yang sempurna, demi memberikan efek kepuasan
              dan kenyamanan kepada seluruh pelanggan kami. <br />
              <br /> Dengan pengalaman dan dedikasi yang tinggi, BEBEJA melayani
              industri Oil and Gas, Laboratory Chemicals,
              <span className="font-semibold">Food and Beverage</span>, Waste
              and Water Treatment, Coating and Industrial Chemicals.
            </p>
            <br />
            <p className="xl:text-lg lg:text-base font-medium text-black/60">
              PRODUK KIMIA yang kami tawarkan dapat dikategorikan sebagai KIMIA
              BAHAN BAKU dan KIMIA INTERMEDIATE, yang didedikasikan khusus untuk
              memenuhi kebutuhan produksi pelanggan kami. Dengan jalur
              distribusi kami yang luas dan solid, kami selalu siap dan sigap
              untuk melayani kebutuhan pelanggan kami di tingkat nasional maupun
              international.
            </p>
          </div>
          {/* Gambar 1 (Portrait) */}
          <div className="lg:w-1/3 w-full ">
            <div className="w-full xl:h-[60vh]  md:h-[50vh] h-[40vh] overflow-hidden rounded-lg shadow-lg">
              <Image
                alt="Kantor BEBEJA"
                src="/kantor-bebeja.jpg"
                className="w-full h-full object-cover"
                width={500}
                height={700} // Portrait Ratio
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-start lg:gap-10 gap-5 lg:py-12 py-5">
          <div className=" lg:w-1/2 h-full  ">
            <h3 className="xl:text-2xl lg:text-xl md:text-lg text-lg  text-black/80 font-semibold pb-3 ">
              Pondasi Bisnis Kami Berpegang pada Prinsip Kimia
            </h3>
            <div className="flex flex-col items-start justify-start  py-5 gap-3 ">
              <div className=" flex flex-row gap-4 ">
                <CheckCircle
                  className="text-blue-400  w-8 h-8 shrink-0"
                  strokeWidth={2}
                  size={30}
                />
                <div className="flex flex-col gap-2 ">
                  <h3 className="xl:text-xl lg:text-base text-base font-semibold text-black/80">
                    Pertumbuhan Bersama
                  </h3>
                  <p className="xl:text-lg lg:text-base font-medium text-black/60  ">
                    Membangun kesuksesan melalui kerja sama yang saling
                    menguntungkan.
                  </p>
                </div>
              </div>
              <div className=" flex flex-row gap-4 ">
                <CheckCircle
                  className="text-blue-400  w-8 h-8 shrink-0"
                  strokeWidth={2}
                  size={30}
                />
                <div className="flex flex-col gap-2 ">
                  <h3 className="xl:text-xl lg:text-base text-base font-semibold text-black/80">
                    Keunggulan
                  </h3>
                  <p className="xl:text-lg lg:text-base font-medium text-black/60  ">
                    Selalu mengutamakan kualitas terbaik di setiap aspek bisnis.
                  </p>
                </div>
              </div>
              <div className=" flex flex-row gap-4 ">
                <CheckCircle
                  className="text-blue-400  w-8 h-8 shrink-0"
                  strokeWidth={2}
                  size={30}
                />
                <div className="flex flex-col gap-2 ">
                  <h3 className="xl:text-xl lg:text-base text-base font-semibold text-black/80">
                    Komitmen
                  </h3>
                  <p className="xl:text-lg lg:text-base font-medium text-black/60  ">
                    Dedikasi penuh dalam memberikan produk dan layanan terbaik.
                  </p>
                </div>
              </div>
              <div className=" flex flex-row gap-4 ">
                <CheckCircle
                  className="text-blue-400  w-8 h-8 shrink-0"
                  strokeWidth={2}
                  size={30}
                />
                <div className="flex flex-col gap-2 ">
                  <h3 className="xl:text-xl lg:text-base text-base font-semibold text-black/80">
                    Kejujuran
                  </h3>
                  <p className="xl:text-lg lg:text-base font-medium text-black/60  ">
                    Menjunjung tinggi transparansi dan integritas dalam setiap
                    transaksi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Gambar 2 (Landscape) */}
          <div className="lg:w-1/2 w-full ">
            <div className="w-full xl:h-[60vh] md:h-[50vh] overflow-hidden rounded-lg shadow-lg">
              <Image
                alt="BEBEJA Team"
                src="/foto-hero-1.jpg"
                className="w-full h-full object-cover"
                width={700}
                height={700} // Landscape Ratio
              />
            </div>
          </div>
        </div>
        <div className="py-10 ">
          <div className="pb-6 text-center">
            <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold uppercase">
              Visi & Misi
            </h3>
            <hr className="border-t-2 border-blue-400 w-20 mx-auto my-3" />
          </div>

          {/* Wrapper */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Visi */}
            <div className="flex flex-col items-center p-6 bg-blue-100 rounded-lg shadow-md">
              <Eye size={50} className="text-blue-600 mb-3" />
              <h4 className="text-2xl font-semibold text-blue-700">Visi</h4>
              <p className="text-center text-black/70 mt-3">
                Menjadi Perusahaan Swasta yang Terkemuka dan Terpercaya,
                Memiliki Wawasan Nasional dan Internasional, Serta Berkeinginan
                Untuk Berkembang Bersama Pelanggan, Sehingga Dapat Bersaing di
                Tingkat Nasional Maupun Internasional.
              </p>
            </div>

            {/* Misi */}
            <div className="flex flex-col items-center p-6 bg-green-100 rounded-lg shadow-md">
              <Target size={50} className="text-green-600 mb-3" />
              <h4 className="text-2xl font-semibold text-green-700">Misi</h4>
              <ul className="text-black/70 mt-3 space-y-2 list-disc list-inside">
                <li>Memberikan Pelayanan yang Tepat dan Efisien</li>
                <li>
                  Mematuhi Keselamatan dan Kesehatan Kerja Dalam Seluruh Aspek
                  Kinerja Kami
                </li>
                <li>
                  Mengelola dan Menciptakan Sumber Daya Manusia Secara
                  Profesional
                </li>
                <li>
                  Memenuhi Standard Baku Mutu yang Berlaku untuk Seluruh Produk
                  yang Kami Sediakan
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
