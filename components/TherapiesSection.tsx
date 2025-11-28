
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Leaf, Heart, Activity } from "lucide-react";

export default function TherapiesSection() {
  const therapies = [
    {
      icon: Leaf,
      title: "Abhyangam",
      description: "Therapeutic full-body oil massage to rejuvenate and relax",
    },
    {
      icon: Activity,
      title: "Vasti",
      description: "Medicated enema therapy for digestive and nervous system",
    },
    {
      icon: Heart,
      title: "Kizhi",
      description: "Herbal poultice massage for pain relief and muscle strength",
    },
    {
      icon: Sparkles,
      title: "Swedana",
      description: "Herbal steam therapy to eliminate toxins and improve circulation",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#FFF8E7]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Animated Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 50,
            }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Rotating Circle Background */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4AF37]/10 via-[#2D5016]/10 to-[#D4AF37]/10 blur-2xl"
              />

              {/* Main Image with Circular Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <Image
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f4c6f9db09dc6bd77d1784/145b66d4d_Gemini_Generated_Image_by3oktby3oktby3o.png"
                  alt="Ayurvedic Therapies"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-full shadow-2xl"
                />
              </motion.div>

              {/* Decorative Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] opacity-20 blur-xl"
              />

              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-gradient-to-br from-[#2D5016] to-[#4A7C2F] opacity-20 blur-xl"
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 bg-white border border-[#D4AF37] rounded-full mb-4">
              <span className="text-[#2D5016] font-semibold">
                Traditional Therapies
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#2D5016] mb-6">
              Authentic Ayurvedic
              <br />
              <span className="text-[#D4AF37]">Healing Therapies</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Experience the profound healing benefits of traditional Ayurvedic
              therapies practiced for thousands of years. Each therapy is
              designed to restore balance, eliminate toxins, and promote holistic
              wellness.
            </p>

            {/* Therapy List */}
            <div className="space-y-4">
              {therapies.map((therapy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2D5016] to-[#4A7C2F] flex items-center justify-center flex-shrink-0">
                    <therapy.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#2D5016] mb-1">
                      {therapy.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {therapy.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-r from-[#FFF8E7] to-[#F5E6D3] rounded-xl border-2 border-[#D4AF37]/30"
            >
              <p className="text-gray-700 leading-relaxed italic">
                "Our therapies are performed by trained therapists using
                authentic herbal oils and traditional techniques passed down
                through generations."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
