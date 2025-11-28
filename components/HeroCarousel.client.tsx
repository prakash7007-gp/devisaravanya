"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroCarouselClient() {
  const { t, language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const isTamil = language === "ta";

  const slides = [
    {
      id: 1,
      title: t("hero.slide1.title"),
      subtitle: t("hero.slide1.subtitle"),
      description: t("hero.slide1.description"),
      bgColor: "from-[#F9E7C0] to-[#EAC97C]",
      image: "/images/frontview.png",
    },
    {
      id: 2,
      title: t("hero.slide2.title"),
      subtitle: t("hero.slide2.subtitle"),
      description: t("hero.slide2.description"),
      bgColor: "from-[#F9E7C0] to-[#EAC97C]",
      image: "/images/banner-2.avif",
    },
    {
      id: 3,
      title: t("hero.slide3.title"),
      subtitle: t("hero.slide3.subtitle"),
      description: t("hero.slide3.description"),
      bgColor: "from-[#F9E7C0] to-[#EAC97C]",
      image: "/images/banner-2.avif",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 50000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      {/* 📱 MOBILE LAYOUT (SEPARATE UI) */}
      <section className="relative block lg:hidden h-[500px] overflow-hidden">
        <Image
          src={slides[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />

        {/* Transparent Card */}
        <div className="absolute inset-0 flex items-end justify-center pb-16 px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full bg-white/50 backdrop-blur-xl shadow-xl p-5 rounded-2xl"
          >
            <h1
              className={`font-bold text-[#A86A00] mb-3 leading-tight 
                ${isTamil ? "text-3xl" : "text-4xl"}
              `}
            >
              {slides[currentSlide].title}
            </h1>
            {/* SUBTITLE */}
            {currentSlide === 0 && (
              <h3
                className={`
      font-semibold mb-6 leading-tight text-[#5C4320]
      ${isTamil
                    ? "text-xl md:text-3xl lg:text-4xl"
                    : "text-2xl md:text-3xl lg:text-4xl"
                  }
    `}
              >
                {slides[currentSlide].subtitle}
              </h3>
            )}

            <p className="text-[#4A3A25] font-semibold mb-4">
              {slides[currentSlide].description}
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <Button className="bg-[#8B5E3C] text-white px-6 py-4 rounded-full">
                  {t("hero.buttons.book")}
                </Button>
              </Link>

              <Link href="/treatments">
                <Button
                  variant="outline"
                  className="border-2 border-[#8B5E3C] text-[#8B5E3C] px-6 py-4 rounded-full"
                >
                  {t("hero.buttons.treatments")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Mobile Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full"
        >
          <ChevronLeft className="text-[#8B5E3C]" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full"
        >
          <ChevronRight className="text-[#8B5E3C]" />
        </button>
      </section>

      {/* 🖥 DESKTOP LAYOUT (UNCHANGED FROM YOUR DESIGN) */}
      <section
        className="
          relative 
          hidden lg:flex 
          h-[700px] xl:h-[650px]
          overflow-hidden
        "
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex flex-row"
          >
            {/* TEXT LEFT */}
            <div
              className={`
                flex-1 flex items-center justify-center 
                bg-gradient-to-br ${slides[currentSlide].bgColor}
                px-20 py-12 text-[#4A3728]
              `}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-2xl"
              >
                <h1
                  className={`font-bold mb-3 text-[#A86A00] leading-tight
                    ${isTamil ? "text-4xl lg:text-5xl" : "text-5xl lg:text-6xl"}
                  `}
                >
                  {slides[currentSlide].title}
                </h1>
                {/* SUBTITLE */}
                {currentSlide === 0 && (
                  <h3
                    className={`
      font-semibold mb-6 leading-tight text-[#5C4320]
      ${isTamil
                        ? "text-xl md:text-3xl lg:text-4xl"
                        : "text-2xl md:text-3xl lg:text-4xl"
                      }
    `}
                  >
                    {slides[currentSlide].subtitle}
                  </h3>
                )}



                <p className="text-[#4A3A25] text-xl mb-8 font-semibold">
                  {slides[currentSlide].description}
                </p>

                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button className="bg-[#8B5E3C] text-white px-8 py-6 rounded-full">
                      {t("hero.buttons.book")}
                    </Button>
                  </Link>

                  <Link href="/treatments">
                    <Button
                      variant="outline"
                      className="border-2 border-[#8B5E3C] text-[#8B5E3C] px-8 py-6 rounded-full"
                    >
                      {t("hero.buttons.treatments")}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* IMAGE RIGHT */}
            <div className="relative w-1/2 h-full overflow-hidden">
              <Image
                src={slides[currentSlide].image}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* DESKTOP ARROWS */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/90 p-4 rounded-full shadow-xl"
        >
          <ChevronLeft className="w-7 h-7 text-[#8B5E3C]" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/90 p-4 rounded-full shadow-xl"
        >
          <ChevronRight className="w-7 h-7 text-[#8B5E3C]" />
        </button>
      </section>
    </>
  );
}
