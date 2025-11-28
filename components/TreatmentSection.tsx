"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export default function TreatmentsSection({ packages }: { packages: any[] }) {
  const { t } = useLanguage(); // <-- your global translator

  const categoryColors: any = {
    detox: "bg-green-100 text-green-800",
    rejuvenation: "bg-purple-100 text-purple-800",
    pain_management: "bg-red-100 text-red-800",
    wellness: "bg-blue-100 text-blue-800",
    special: "bg-yellow-100 text-yellow-800",
    respiratory: "bg-blue-100 text-blue-800",
    skin_hair: "bg-purple-100 text-purple-800",
    digestive: "bg-orange-100 text-orange-800",
    lifestyle_diseases: "bg-yellow-100 text-yellow-800",
    joint_health: "bg-green-100 text-green-800",
  };

  return (
    <section id="treatments" className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#FFF8E7] border border-[#D4AF37] rounded-full mb-4">
            <span className="text-[#2D5016] font-semibold">
              {t("treatments.tag")}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#2D5016] mb-6">
            {t("treatments.heading")}
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("treatments.subheading")}
          </p>
        </motion.div>

        {/* Treatment Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] hover:shadow-2xl transition-all duration-300 h-full flex flex-col">

                {/* Header */}
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className={categoryColors[pkg.category] || "bg-gray-100"}>
                      {pkg.category?.replace(/_/g, " ")}
                    </Badge>

                    {pkg.duration && (
                      <div className="text-right">
                        <p className="text-xs text-gray-500">{pkg.duration}</p>
                      </div>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-[#2D5016]">
                    {pkg.name}
                  </h3>
                </CardHeader>

                {/* Content */}
                <CardContent className="flex-grow">

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  {pkg.includes && pkg.includes.length > 0 && (
                    <div className="space-y-3 mb-6">
                      <p className="font-semibold text-[#2D5016]">
                        {t("treatments.includes")}
                      </p>

                      <ul className="space-y-2">
                        {pkg.includes.map((item: string, i: number) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <Check className="w-5 h-5 text-[#4A7C2F] flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <a href="#appointment">
                    <Button className="w-full ayurveda-gradient text-white">
                      {t("treatments.bookBtn")}
                    </Button>
                  </a>
                </CardContent>

              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
