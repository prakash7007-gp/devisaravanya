"use client";

import { motion } from "framer-motion";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

export default function PageBanner({ title, subtitle, backgroundImage }: PageBannerProps) {
  return (
    <section
      className="relative h-[400px] md:h-[500px] flex items-center"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#2D5016]/90 to-[#2D5016]/70" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/90">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
