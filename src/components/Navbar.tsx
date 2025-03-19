"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const handleClick = () => {
    window.open("https://wa.me/6285222173322", "_blank");
  };
  const [isOpen, setIsOpen] = useState(false);
  const [navSticky, setNavSticky] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 700) {
        setNavSticky(true);
      }
      if (window.scrollY <= 700) {
        setNavSticky(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Pastikan elemen yang diklik bukan bagian dari navbar
      if (
        isOpen &&
        !event
          .composedPath()
          .some((el) => (el as HTMLElement).id === "navbar-menu")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const stickyStyle = navSticky
    ? "backdrop-blur-sm  bg-white/95 shadow-black/20 shadow-sm"
    : "";

  const navOpenStyle = navSticky
    ? "translate-y-0 transition-all duration-300"
    : "translate-y-[-100%] transition-all duration-300";

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  const pathname = usePathname();

  const getLinkClass = (href: string) =>
    pathname === href ? "text-blue-400 font-semibold" : "text-blackish";

  return (
    <nav
      className={`fixed w-full  ${stickyStyle} ${navOpenStyle} bg-black/40  transition-all  z-[1050]
       `}
    >
      <div className="">
        <div className="" onClick={handleOutsideClick}>
          <div
            className={`flex items-center  h-[10vh] justify-between  gap-5  z-[10006] px-6 md:px-20 lg:px-36 `}
          >
            <Image
              alt="bebeja"
              src={"/bebeja.webp"}
              width={180}
              height={180}
            ></Image>
            <div id="navbar-menu" className={`hidden lg:block `}>
              <div className="">
                <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className={`navbar__link cursor-pointer relative ${getLinkClass(
                      "/"
                    )}`}
                  >
                    BERANDA
                  </Link>

                  <Link
                    href={"/tentang"}
                    className={`navbar__link cursor-pointer relative ${getLinkClass(
                      "/tentang"
                    )}`}
                  >
                    TENTANG
                  </Link>

                  <Link
                    href={"/produk"}
                    className={`navbar__link cursor-pointer relative ${getLinkClass(
                      "/produk"
                    )}`}
                  >
                    PRODUK
                  </Link>
                  <Link
                    href={"/kontak"}
                    className={`navbar__link cursor-pointer relative ${getLinkClass(
                      "/kontak"
                    )}`}
                  >
                    KONTAK
                  </Link>
                </div>
              </div>
            </div>
            <button
              onClick={handleClick}
              className="lg:flex hidden bg-blue-400 xl:text-base text-sm  text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 items-center gap-3"
            >
              <Phone
                stroke="none"
                fill="white"
                className="md:h-5 md:w-5 h-3 w-3 "
              />
              Hubungi
            </button>
            <div className="flex items-center lg:hidden md:flex">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50"
                aria-controls="navbar-menu"
                aria-expanded="false"
              >
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          id="navbar-menu"
          className={`lg:hidden relative transform transition-all duration-300 delay-300  backdrop-blur`}
        >
          <div className="px-6 md:px-20 lg:px-36">
            <div className="flex flex-col w-fit gap-4  font-medium py-4 text-blackish ">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`navbar__link cursor-pointer relative ${getLinkClass(
                  "/"
                )}`}
              >
                Beranda
              </Link>
              <Link
                href={"/tentang"}
                onClick={() => setIsOpen(false)}
                className={`navbar__link cursor-pointer relative ${getLinkClass(
                  "/tentang"
                )}`}
              >
                Tentang
              </Link>

              <Link
                href={"/produk"}
                onClick={() => setIsOpen(false)}
                className={`navbar__link cursor-pointer relative ${getLinkClass(
                  "/produk"
                )}`}
              >
                PRODUK
              </Link>

              <Link
                href={"/kontak"}
                onClick={() => setIsOpen(false)}
                className={`navbar__link cursor-pointer relative ${getLinkClass(
                  "/kontak"
                )}`}
              >
                Kontak
              </Link>
            </div>
          </div>
          <div className="px-6 md:px-20 lg:px-36 pb-5">
            <button
              onClick={handleClick}
              className="lg:hidden flex lg:text-base text-sm bg-blue-400 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 items-center gap-3"
            >
              <Phone stroke="none" fill="white" className="h-5 w-5 " />
              Hubungi Kami
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
