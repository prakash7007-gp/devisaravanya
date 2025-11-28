"use client";

import { motion } from "framer-motion";
import { Youtube, Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function YouTubeSectionClient() {
  const { t } = useLanguage();

  const videos = [
    {
      id: 1,
      title: t("youtube.videos.video1"),
      videoId: "qqo2C5-lRl8",
      thumbnail:
        "images/THMBNAIL.png"
    },
    {
      id: 2,
      title: t("youtube.videos.video2"),
      videoId: "Lu0U2WJLVOo",
      thumbnail:
        "images/SINUS.png"
    },
    {
      id: 3,
      title: t("youtube.videos.video3"),
      videoId: "CNuNIUd0bSE",
      thumbnail:
        "images/RA.png"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#FFF8E7] to-white">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#D4AF37] rounded-full mb-4">
            <Youtube className="w-4 h-4 text-red-600" />
            <span className="text-[#2D5016] font-semibold">
              {t("youtube.badge")}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#2D5016] mb-6">
            {t("youtube.title")}
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            {t("youtube.description")}
          </p>

          <a
            href="https://www.youtube.com/@DrDeviSharavanya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
          >
            <Youtube className="w-6 h-6" />
            {t("youtube.subscribeBtn")}
          </a>
        </motion.div>

        {/* YouTube Videos Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <a
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  <div className="absolute inset-0  group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-red-600 group-hover:bg-red-700 flex items-center justify-center transition-all group-hover:scale-110">
                      <Play className="w-4 h-4 text-white ml-1" />
                    </div>
                  </div>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-[#2D5016] group-hover:text-[#D4AF37] transition-colors">
                  {video.title}
                </h3>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
