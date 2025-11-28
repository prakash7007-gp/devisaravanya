"use client";
import React from "react";
import { Award, Heart, Shield, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-[#f5f1e8]">
      {/* Banner Section */}
      <section className="relative h-80 bg-gradient-to-r from-[#2d5016] to-[#3d6526]">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[url('https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=1260')] bg-cover bg-center" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            {t("about.banner_title")}
          </h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <div className="inline-block bg-[#c9a961]/20 px-4 py-2 rounded-full mb-4">
              <span className="text-[#2d5016] font-semibold">
                {t("about.our_story")}
              </span>
            </div>
            <h2 className="text-4xl font-bold text-[#2d5016] mb-6">
              {t("about.legacy_title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-[#5a6c3a] leading-relaxed text-lg">
                {t("about.story_p1")}
              </p>
              <p className="text-[#5a6c3a] leading-relaxed">
                {t("about.story_p2")}
              </p>
              <p className="text-[#5a6c3a] leading-relaxed">
                {t("about.story_p3")}
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5473184/pexels-photo-5473184.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hospital"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-[#f5f1e8]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Mission */}
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#c9a961] flex items-center justify-center">
                    <Target className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2d5016]">
                    {t("about.mission_title")}
                  </h3>
                </div>
                <p className="text-[#5a6c3a]">
                  {t("about.mission_text")}
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#c9a961] flex items-center justify-center">
                    <Heart className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2d5016]">
                    {t("about.vision_title")}
                  </h3>
                </div>
                <p className="text-[#5a6c3a]">{t("about.vision_text")}</p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2d5016]">
              {t("about.values_title")}
            </h2>
            <p className="text-[#5a6c3a] text-lg max-w-3xl mx-auto">
              {t("about.values_subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Compassion */}
            <Card className="border-2 border-[#c9a961]/30 hover:border-[#c9a961]">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#c9a961] flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-white" size={32} />
                </div>
                <h4 className="text-lg font-bold text-[#2d5016]">
                  {t("about.value1_title")}
                </h4>
                <p className="text-[#5a6c3a] text-sm">
                  {t("about.value1_text")}
                </p>
              </CardContent>
            </Card>

            {/* Excellence */}
            <Card className="border-2 border-[#c9a961]/30 hover:border-[#c9a961]">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#c9a961] flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={32} />
                </div>
                <h4 className="text-lg font-bold text-[#2d5016]">
                  {t("about.value2_title")}
                </h4>
                <p className="text-[#5a6c3a] text-sm">
                  {t("about.value2_text")}
                </p>
              </CardContent>
            </Card>

            {/* Patient-Centric */}
            <Card className="border-2 border-[#c9a961]/30 hover:border-[#c9a961]">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#c9a961] flex items-center justify-center mx-auto mb-4">
                  <Target className="text-white" size={32} />
                </div>
                <h4 className="text-lg font-bold text-[#2d5016]">
                  {t("about.value3_title")}
                </h4>
                <p className="text-[#5a6c3a] text-sm">
                  {t("about.value3_text")}
                </p>
              </CardContent>
            </Card>

            {/* Holistic */}
            <Card className="border-2 border-[#c9a961]/30 hover:border-[#c9a961]">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#c9a961] flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-white" size={32} />
                </div>
                <h4 className="text-lg font-bold text-[#2d5016]">
                  {t("about.value4_title")}
                </h4>
                <p className="text-[#5a6c3a] text-sm">
                  {t("about.value4_text")}
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
