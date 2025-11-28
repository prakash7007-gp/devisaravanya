"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Activity } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WelcomeSectionClient() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Users,
      number: "15000+",
      label: t("welcomeSection.stats.patients"),
    },
    {
      icon: Award,
      number: "98+",
      label: t("welcomeSection.stats.doctors"),
    },
    {
      icon: Activity,
      number: "50+",
      label: t("welcomeSection.stats.treatments"),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 bg-[#FFF8E7] border border-[#D4AF37] rounded-full mb-4">
              <span className="text-[#2D5016] font-semibold text-sm md:text-base">
                {t("welcomeSection.badge")}
              </span>
            </div>

            <h2 className="text-4xl md:text-4xl sm:text-xl font-bold text-[#2D5016] mb-5 leading-tight">
              {t("welcomeSection.titleLine1")}
              <br />
              <span className="text-[#D4AF37]">{t("welcomeSection.titleLine2")}</span>
            </h2>

            <p className="text-base md:text-lg text-gray-700 mb-5 leading-relaxed">
              {t("welcomeSection.p1")}
            </p>

            <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
              {t("welcomeSection.p2")}
            </p>

            <Link href="/about">
              <Button className="ayurveda-gradient text-white px-6 md:px-8 py-4 md:py-5 text-base md:text-lg group rounded-full">
                {t("welcomeSection.discoverMore")}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Doctor Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#D4AF37] max-w-[600px] mx-auto">
              <Image
                src="/images/DEVIMAM4.png"
                alt="Dr. Devi Saravanya - Founder & Chief Physician"
                width={800}
                height={500}
                className="w-full h-[350px] sm:h-[450px] md:h-[500px] object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-16 md:mt-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#FFF8E7] to-[#F5E6D3] border-2 border-[#D4AF37]/20 hover:shadow-xl transition"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8941F] flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2D5016] mb-1 sm:mb-2">
                {stat.number}
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
