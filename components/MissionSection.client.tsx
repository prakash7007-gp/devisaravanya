"use client";

import { motion } from "framer-motion";
import { Target, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function MissionSectionClient() {
  const { t } = useLanguage();

  const missionPoints = [
    {
      title: t("mission.points.authTitle"),
      text: t("mission.points.authText")
    },
    {
      title: t("mission.points.personalTitle"),
      text: t("mission.points.personalText")
    },
    {
      title: t("mission.points.holisticTitle"),
      text: t("mission.points.holisticText")
    },
    {
      title: t("mission.points.holisticTitle"),
      text: t("mission.points.holisticText")
    },
    {
      title: t("mission.points.holisticTitle"),
      text: t("mission.points.holisticText")
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/mission1.png"
                alt="Our Mission"
                className="w-full h-[400px] sm:h-[450px] md:h-[600px] object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Title */}
            <h2 className="text-4xl md:text-4xl sm:text-xl font-bold text-[#2D5016] mb-6 leading-tight">
              {t("mission.titleLine1")}
              <br />
              <span className="text-[#D4AF37]">{t("mission.titleLine2")}</span>
            </h2>

            {/* Paragraphs */}
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {t("mission.p1")}
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t("mission.p2")}
            </p>

            {/* Mission Points */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              {missionPoints.map((point, index) => (
                <div
                  key={index}
                  className="p-4 bg-[#FFF8E7] rounded-xl border border-[#D4AF37]/30 shadow-sm flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#2D5016] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>

                  <h4 className="text-[#2D5016] font-semibold text-sm">
                    {point.title}
                  </h4>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
