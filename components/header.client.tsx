"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

export default function HeaderClient() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "nav.home" },
    { href: "/about", label: "nav.about" },
    { href: "/treatments", label: "nav.treatments" },
    { href: "/contact", label: "nav.contact" },
  ];
  const branches = [
    { name: "branches.chennai", path: "/branches/chennai" },
    { name: "branches.madurai", path: "/branches/madurai" },
    { name: "branches.tirunelveli", path: "/branches/tirunelveli" },
    { name: "branches.trichy", path: "/branches/trichy" },
    { name: "branches.salem", path: "/branches/salem" },
  ];

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".dropdown-wrapper")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-[#3d5c1f] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs sm:text-sm">
          <div className="flex gap-4 sm:gap-6 flex-wrap items-center">
            <a
              href="tel:+917305744144"
              className="flex items-center gap-2 hover:opacity-80"
            >
              <Phone size={14} />
              <span>+91 73057 44144</span>
            </a>

            <a
              href="mailto:drdevisharavanyaclinic@gmail.com"
              className="flex items-center gap-2 hover:opacity-80 truncate"
            >
              <Mail size={14} />
              <span className="truncate">drdevisharavanyaclinic@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/DRTDeviSharavanya" className="hover:opacity-80"><Facebook size={14} /></a>
            <a href="https://www.instagram.com/p/C9ENgcXyXru/" className="hover:opacity-80"><Instagram size={14} /></a>
            <a href="https://youtube.com/@drdevisharavanya?si=G38hksQtqjWnyIzY" className="hover:opacity-80"><Youtube size={14} /></a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-3 sm:px-4 py-3">
          <div className="flex justify-between items-center">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Clinic Logo"
                width={110}
                height={50}
                className="object-contain"
              />

              <div className="leading-tight">
                <h1 className="text-xl sm:text-2xl font-bold text-[#2D5016]">
                  Dr. Devi Saravanya
                </h1>
                <p className="text-xl  text-[#5C4320] font-bold">
                  Herbal Clinic
                </p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-gray-700 hover:text-[#3d5c1f] font-medium ${isActive(link.href) && "text-[#3d5c1f]"
                    }`}
                >
                  {t(link.label)}
                </Link>
              ))}

              {/* DROPDOWN */}
              <div
                className="relative dropdown-wrapper"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="flex items-center gap-2 text-gray-700 hover:text-[#3d5c1f]">
                  {t("nav.branches")}
                  <ChevronDown size={16} />
                </button>


                {/** DROPDOWN MENU */}
                <ul
                  className={`absolute left-0 mt-2 bg-white border rounded-md shadow-lg w-44 transition-all duration-200 ${isDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                    }`}
                >
                  {branches.map((branch) => (
                    <li key={branch.name}>
                      <Link
                        href={branch.path}
                        className="block px-4 py-2 hover:bg-yellow-200 text-gray-700"
                      >
                        {t(branch.name)}
                      </Link>
                    </li>
                  ))}

                </ul>
              </div>

              {/* LANGUAGE BUTTON */}
              <button
                onClick={toggleLanguage}
                className="px-4 py-2 border rounded font-medium"
              >
                {language === "en" ? "தமிழ்" : "English"}
              </button>

              <Link
                href="/contact"
                className="bg-[#3d5c1f] text-white px-5 py-2 rounded hover:bg-[#2d4c0f]"
              >
                Book Appointment
              </Link>
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded hover:bg-gray-100 border border-gray-500"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* MOBILE MENU */}
          {isOpen && (
            <div className="lg:hidden mt-4 border-t pt-4">
              <div className="space-y-2">

                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg ${isActive(link.href)
                      ? "bg-[#3d5c1f] text-white"
                      : "text-gray-700 bg-gray-50"
                      }`}
                  >
                    {t(link.label)}
                  </Link>
                ))}

                {/* MOBILE DROPDOWN */}
                <details className="bg-gray-50 px-4 py-3 rounded-lg">
                  <summary className="cursor-pointer font-medium">{t("nav.branches")}</summary>
                  <div className="mt-2 space-y-2">
                    {branches.map((branch) => (
                      <Link
                        key={branch.name}
                        href={branch.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 rounded-lg bg-white hover:bg-yellow-100"
                      >
                        {t(branch.name)}
                      </Link>
                    ))}

                  </div>
                </details>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-center bg-[#3d5c1f] text-white rounded-lg"
                >
                  Book Appointment
                </Link>

                <button
                  onClick={toggleLanguage}
                  className="w-full px-4 py-2 border rounded font-medium"
                >
                  {language === "en" ? "தமிழ்" : "English"}
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
