"use client";
import Hero from "@/components/beranda/Hero";
import Hero1 from "@/components/Hero";
import LiniBisnis from "@/components/helper/LiniBisnis";
import { ArrowRight, Briefcase, Clock, TestTube } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from "next/image";

const products = [
  { img: "/kimia/kimia-1.jpg", title: "Bahan Bahan Kimia" },
  { img: "/kimia/kimia-2.webp", title: "Hydrolic Acid" },
  { img: "/kimia/kimia-3.webp", title: "Bahan Kimia Labolatoriom" },
  { img: "/kimia/kimia-4.jpg", title: "Asam Klorida" },
];

const coatingTypes = [
  "Automotive & Spare Part",
  "Road Marking",
  "Flooring",
  "Packaging",
  "Construction",
  "Marine",
  "Industrial Coating",
  "Decorative",
];

const services = [
  "Protective Coating (Cat untuk Pipanisasi dan Tank)",
  "Epoxy Flooring (Cat Lantai)",
  "Heat Resistant Paint (Cat Tahan Panas 200 – 600 ͦC)",
  "Marine Coating (Cat Kapal – Topside s/d Bottom)",
];

const page = () => {
  return (
    <div>
      <Hero />
      <div className="lg:py-10 py-10 px-6 md:px-20 lg:px-36 relative">
        <section
          className="w-full xl:max-w-5xl lg:max-w-3xl lg:bg-white lg:shadow-xl rounded-xl py-8 md:px-6 mx-auto 
          lg:absolute lg:-bottom-10 lg:left-1/2 lg:transform lg:-translate-x-1/2"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            {/* Item 1 */}
            <div className="flex flex-col items-center bg-white shadow-md lg:bg-none lg:shadow-none py-5 lg:py-0 px-5 lg:px-none rounded-2xl md:border-r-2 md:border-l-2 lg:border-gray-300 border-gray-200 ">
              <TestTube className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">
                Laboratory Chemicals
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Layanan Kimia terbaik untuk kebutuhan Anda.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center bg-white shadow-md lg:bg-none lg:shadow-none py-5 lg:py-0 px-5 lg:px-none rounded-2xl md:border-r-2 md:border-l-2 lg:border-gray-300 border-gray-200  ">
              <Briefcase className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">
                Professional Area
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Tim ahli dengan pengalaman di berbagai industri.
              </p>
            </div>

            <div className="flex flex-col items-center bg-white shadow-md lg:bg-none lg:shadow-none py-5 lg:py-0 px-5 lg:px-none rounded-2xl md:border-r-2 md:border-l-2 lg:border-gray-300 border-gray-200  ">
              <Clock className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">
                Opening Hours
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Senin - Jumat: 08:00 - 18:00, Sabtu: 09:00 - 14:00.
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* <div className='h-[80vh] bg-red-200'></div> */}

      <section className="py-12 px-6 md:px-20 lg:px-36  ">
        <div className="grid lg:grid-cols-2 gap-8 items-center py-5 lg:h-[70vh] h-full">
          <div className="relative flex items-center justify-center w-full max-w-md mx-auto lg:max-w-full">
            <div className="relative overflow-hidden rounded-xl shadow-lg w-[90%] lg:w-[60vh]">
              <Image
                src="/foto-hero-2.jpg"
                alt="Speaker"
                width={600}
                height={600}
                className="w-full rounded-xl "
              />
            </div>

            <div className="absolute bottom-[-20px] left-[-5px] md:bottom-[-30px] xl:left-[-20px] lg:left-[-14px] md:left-[10px] w-3/6  xl:w-2/4 transform rotate-5">
              <Image
                width={600}
                height={600}
                src="/foto-hero-1.jpg"
                alt="Workshop"
                className="rounded-lg shadow-xl border-4 border-white "
              />
            </div>
          </div>

          <div>
            <h5 className="relative  inline-block xl:text-2xl lg:text-xl md:text-lg text-lg  text-black/80 font-semibold ">
              Tentang Perusahaan
              <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-300 opacity-50 "></span>
            </h5>
            <h2 className="lg:text-3xl md:text-2xl text-2xl lg:font-semibold sm:font-medium">
              Solusi Kimia Terpercaya untuk Industri Anda
            </h2>
            <p className="text-gray-700 mt-4">
              Produk kimia kami dirancang untuk membantu Anda meningkatkan
              efisiensi, mengurangi biaya, dan meningkatkan kualitas produk.
            </p>
            <div className="flex md:flex-row flex-col pt-3 gap-5">
              <div className="flex flex-col">
                <h3 className="xl:text-2xl lg:text-xl md:text-lg text-lg  text-blue-400 font-semibold ">
                  01.
                </h3>
                <h5 className="text-lg font-semibold text-gray-800">
                  Labolatory Kimia Yang Mendukung
                </h5>
                <p className="text-gray-600 mt-2 text-sm">
                  Mendukung kemajuan ilmu pengetahuan dan industri.
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="xl:text-2xl lg:text-xl md:text-lg text-lg  text-blue-400 font-semibold ">
                  02.
                </h3>
                <h5 className="text-lg font-semibold text-gray-800">
                  Testing Kimia Dengan komprehensif
                </h5>
                <p className="text-gray-600 mt-2 text-sm">
                  Menyediakan layanan testing kimia yang komprehensif dan akurat
                  
                </p>
              </div>
            </div>

            <button className="mt-6 bg-blue-400 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 flex items-center gap-3">
              <Link href={"/tentang"}>Lihat Lebih</Link>
              <ArrowRight className="h-6 w-6 " />
            </button>
          </div>
        </div>
      </section>
      <section className="py-12 px-6 md:px-20 lg:px-36 bg-gray-100">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:h-[70vh] h-full">
          {/* BAGIAN TEKS */}
          <div className="flex flex-col items-start w-full lg:w-1/2">
            <h5 className="relative inline-block xl:text-2xl lg:text-xl md:text-lg text-lg text-black/80 font-semibold">
              Laboratory Chemicals
              <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-300 opacity-50"></span>
            </h5>
            <h2 className="lg:text-3xl md:text-2xl text-2xl lg:font-semibold sm:font-medium pt-2">
              Mitra Terpercaya dalam Penyediaan Produk Kimia
            </h2>
            <p className="text-gray-700 mt-4">
              Kami menyediakan Bahan kimia laboratorium diantaranya bahan kimia
              yang digunakan dalam eksperimen dan pengujian di laboratorium
              dengan Tingkat kemurnian yang tinggi. Terdiri dari Pro Anylize
              (PA), Analar (AR), Guaranted Reagent (GR) Chemical Pure (CP) dll.
            </p>
            <button className="mt-6 bg-blue-400 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 flex items-center gap-3">
              <Link href={"/tentang"}>Lihat Lainnya</Link>
              <ArrowRight className="h-6 w-6 " />
            </button>
          </div>

          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 relative">
            {/* Efek Gradasi Hitam di Kanan & Kiri */}
            <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r lg:from-black/30 from-black/20 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l lg:from-black/30 from-black/20 to-transparent z-10 pointer-events-none"></div>

            <Carousel
              showArrows={true} // Tampilkan panah navigasi
              autoPlay={true} // Auto-looping
              infiniteLoop={true} // Loop terus-menerus
              showThumbs={false} // Hilangkan thumbnail kecil
              showStatus={false} // Hilangkan status jumlah slide
              interval={3000} // Perpindahan slide setiap 3 detik
              transitionTime={500} // Animasi perpindahan 0.5 detik
              swipeable={true} // Bisa di-swipe di mobile
              emulateTouch={true} // Swipe lebih natural
              centerMode={true} // Mode tengah
              centerSlidePercentage={50} // Setengah dari layar
            >
              {products.map((product, index) => (
                <div key={index} className="px-2">
                  <LiniBisnis img={product.img} title={product.title} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      <section className="py-12 px-6 md:px-20 lg:px-36 h-full">
        <div className="text-center mb-10">
          <div className=" flex flex-col items-center justify-center ">
            <h3 className="lg:text-3xl md:text-2xl text-2xl uppercase lg:font-semibold sm:font-medium  ">
              Lini Bisnis Industri
            </h3>
            <hr className="border text-blue-400 rounded-full w-20 border-dashed " />
          </div>
          <p className="text-gray-600 mt-2">
            Lini bisnis kami mencakup penyediaan bahan baku kimia, pengolahan
            limbah, dan jasa konsultasi industri.
          </p>
        </div>
        <div className="grid xl:grid-cols-3 sm:grid-cols-2  w-full gap-4">
          <LiniBisnis img="/bisnis/hero-1.png" title="Oil & Gas"></LiniBisnis>
          <LiniBisnis
            img="/bisnis/hero-2.png"
            title="Waste & Treatment"
          ></LiniBisnis>
          <LiniBisnis
            img="/bisnis/hero-3.png"
            title="Food & Beverage"
          ></LiniBisnis>

          <LiniBisnis
            img="/bisnis/hero-4.png"
            title="Industrial Chemical"
          ></LiniBisnis>
          <LiniBisnis
            img="/bisnis/hero-5.png"
            title="Labolatory Chemicals"
          ></LiniBisnis>
          <LiniBisnis
            img="/bisnis/hero-6.png"
            title="Paint & Coating Application"
          ></LiniBisnis>
        </div>
      </section>
      <section className="py-12 px-6 md:px-20 lg:px-36">
        <section className="">
          {/* JUDUL */}
          <div className="text-center mb-10">
            <div className=" flex flex-col items-center justify-center ">
              <h3 className="lg:text-3xl md:text-2xl text-2xl uppercase lg:font-semibold sm:font-medium  ">
                Kontak
              </h3>
              <hr className="border text-blue-400 rounded-full w-20 border-dashed " />
            </div>
            <p className="text-gray-600 mt-2">
              Solusi Terbaik untuk Kebutuhan Coating dan Pengecatan Anda
            </p>
          </div>

          <div className="flex flex-col gap-12">
            {/* BAGIAN COATING */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              {/* <h3 className="bg-gray-800 text-white text-xl font-semibold py-3 px-6">
                Jenis Coating
              </h3> */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-800 text-white">
                      <th className="py-3 px-6 text-left w-16">No</th>
                      <th className="py-3 px-6 text-left">Jenis Coating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coatingTypes.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b hover:bg-gray-100 transition"
                      >
                        <td className="py-3 px-6 text-gray-700">{index + 1}</td>
                        <td className="py-3 px-6 text-gray-900 font-medium">
                          {item}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* BAGIAN SERVICE */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full">
              {/* <h3 className="bg-gray-800 text-white text-xl font-semibold py-3 px-6">
                Jasa Pengecatan
              </h3> */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-800 text-white">
                      <th className="py-3 px-6 text-left w-16">No</th>
                      <th className="py-3 px-6 text-left">Jasa Pengecatan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b hover:bg-gray-100 transition"
                      >
                        <td className="py-3 px-6 text-gray-700">{index + 1}</td>
                        <td className="py-3 px-6 text-gray-900 font-medium">
                          {item}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="pt-10">
        <Hero1
          img="/img-bebeja-2.jpg"
          judul="Berlian Benzena Jaya Is a One Stop Chemical Company 
        Providing Commodities and high-tech Performance Specialty Chemicals for Various Industries"
          tinggi="lg:h-[60vh] h-[40vh]"
        />
      </section>
    </div>
  );
};

export default page;
