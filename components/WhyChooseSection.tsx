"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyChooseSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-[#FFF8E7] border border-[#D4AF37] rounded-full mb-4">
            <span className="text-[#2D5016] font-semibold">
              {t("whyChoose.sectionTag")}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D5016] mb-4">
            {t("whyChoose.heading")}
          </h2>

          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            {t("whyChoose.subtitle")}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center items-center min-h-[300px]"
        >

          {/* Single image (right on md+) */}
          <motion.div
            className="md:w-1/2 w-full max-w-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/whychoose.png"
                alt={t("whyChoose.imageAlt") || "Why choose us"}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
