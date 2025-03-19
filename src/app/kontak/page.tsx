/* eslint-disable */

"use client";

import Hero from "@/components/Hero";
import { useForm, ValidationError } from "@formspree/react";
import { Mail, Map, Phone } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
interface FormData {
  nama: string;
  email: string;
  keterangan: string;
  pesan: string;
}
const page = () => {
  const [state, handleSubmit] = useForm("xvgggzbp");

  const [formData, setFormData] = useState<FormData>({
    nama: "",
    email: "",
    keterangan: "",
    pesan: "",
  });

  const showSuccessNotification = () => {
    toast.success("Pesan Anda Terkirim!");
  };

  const isFormValid = (): boolean => {
    if (formData.nama.length < 3) {
      toast.error("Nama harus lebih dari 3 karakter!");
      return false;
    }
    return true;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Mencegah halaman ter-refresh

    if (!isFormValid()) return;

    await handleSubmit(event);

    if (state.succeeded) {
      showSuccessNotification();
      setFormData({
        nama: "",
        email: "",
        keterangan: "",
        pesan: "",
      });
    }
  };
  useEffect(() => {
    if (state.succeeded) {
      showSuccessNotification(); // Menampilkan notifikasi jika pengiriman berhasil
      // Reset form setelah berhasil submit
      setFormData({
        nama: "",
        email: "",
        keterangan: "",
        pesan: "",
      });
    }
  }, [state.succeeded]);
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="  ">
      <Toaster position="top-center" reverseOrder={false} />
      <Hero
        img="/img-bebeja-1.jpg"
        judul="Kontak"
        subJudul="kontak"
        posisi="20%"
      />
      <div className="h-full lg:py-10 py-6 px-6 md:px-20 lg:px-36">
        <div className="pb-6 flex flex-col items-center justify-center ">
          <h3 className="lg:text-3xl md:text-2xl text-2xl uppercase lg:font-semibold sm:font-medium  ">
            Kontak
          </h3>
          <hr className="border text-blue-400 rounded-full w-20 border-dashed " />
        </div>
        <div className="flex md:flex-row flex-col-reverse items-start justify-between gap-3 ">
          <div className="lg:w-2/4">
            <h3 className="lg:text-lg  text-lg ">PT.BERLIAN BENZENA JAYA</h3>
            <div className="pt-3 flex flex-col gap-2">
              <div className="flex flex-row justify-beetwen items-center gap-5">
                <div className="flex items-center justify-center">
                  <Mail
                    stroke="white"
                    strokeWidth={1}
                    fill="gray"
                    className="text-black/80"
                  />
                </div>
                <p className="lg:text-base text-black/80 ">
                  infobebeja@gmail.com
                </p>
              </div>
              <div className="flex flex-row justify-beetwen items-start gap-5">
                <div className="flex items-center justify-center">
                  <Phone fill="gray" stroke="none" className="" />
                </div>
                {/* <p className="lg:text-base text-black/80 ">+62 822 4972 5551</p> */}
                <div className="flex flex-col">
                  <p className="lg:text-base text-black/70 ">
                    +62 822-4972-5551 (Ilham/Admin)
                  </p>
                  <p className="lg:text-base text-black/70 ">
                    +62 852-2217-3322 (Harfi/Marketing)
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-beetwen items-start justify-start gap-5">
                <div className="flex items-center justify-center">
                  <Map
                    stroke="white"
                    strokeWidth={1}
                    fill="gray"
                    className=""
                  />
                </div>
                <p className=" lg:text-base text-black/80 ">
                  Ruko Garden Hous HB1 No.7 Grand Wisata Kel. Lambang Jaya Kec.
                  Tambun Selatan Bekasi - 17510
                </p>
              </div>
              {/* <MapComponent /> */}
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-center">
            <h3 className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-black/80 pb-3 uppercase">
              Hubungi kami untuk <br /> informasi lebih lanjut.
            </h3>
            <div className="w-full">
              {" "}
              {/* Tambahkan wrapper agar form tidak terbatas */}
              <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full">
                <input
                  type="text"
                  placeholder="Nama"
                  value={formData.nama}
                  name="nama"
                  className="py-[0.7rem] w-full max-w-full text-black border border-black/40 px-4"
                  required
                  onChange={handleInputChange}
                />

                <input
                  value={formData.email}
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  className="py-[0.7rem] w-full max-w-full text-black border border-black/40 px-4"
                  required
                  onChange={handleInputChange}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />

                <input
                  value={formData.keterangan}
                  type="text"
                  placeholder="Keterangan"
                  name="keterangan"
                  className="py-[0.7rem] w-full max-w-full text-black border border-black/40 px-4"
                  required
                  onChange={handleInputChange}
                />

                <textarea
                  value={formData.pesan}
                  placeholder="Pesan"
                  name="pesan"
                  id="pesan"
                  rows={4}
                  className="py-[0.7rem] w-full max-w-full text-black border border-black/40 px-4"
                  required
                  onChange={handleInputChange}
                ></textarea>
                <ValidationError
                  prefix="pesan"
                  field="pesan"
                  errors={state.errors}
                />

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="py-[0.7rem] w-full text-white bg-blue-500 hover:bg-blue-700 px-4 font-semibold"
                >
                  {state.submitting ? "Mengirim..." : "Kirim"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
