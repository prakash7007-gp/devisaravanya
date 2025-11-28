"use client";

import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

export default function TestimonialsSectionClient() {
  type Testimonial = {
    id?: string | number;
    testimonial: string;
    rating?: number;
    patient_name?: string;
    treatment?: string;
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const { data: testimonials = [], isLoading } = useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: async (): Promise<Testimonial[]> => {
      const res = await fetch('/api/testimonials');
      if (!res.ok) throw new Error("Failed to fetch testimonials");
      return res.json();
    },
  });

  // Auto-slide effect
  useEffect(() => {
    if (testimonials.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Get visible testimonials: mobile shows one, desktop shows all
  const getVisibleTestimonials = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return [testimonials[currentIndex]];
    }
    return testimonials;
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-[#FFF8E7] to-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-white border border-[#D4AF37] rounded-full mb-4">
            <span className="text-[#2D5016] font-semibold">Testimonials</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#2D5016] mb-6">
            What Our Patients Say
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from real people who found healing through herbal medicine
          </p>
        </motion.div>

        {/* LOADING */}
        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {Array(3).fill(0).map((_, i) => (
              <Card key={i} className="border-2">
                <CardContent className="p-8">
                  <Skeleton className="h-20 w-full mb-4" />
                  <Skeleton className="h-4 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : testimonials.length > 0 ? (
          <div className="relative max-w-7xl mx-auto">

            <div
              className="
              grid grid-cols-1 
              md:grid-cols-3 
              gap-8 mb-8

              overflow-x-auto 
              snap-x snap-mandatory 
              md:overflow-visible 
              md:snap-none 
              scrollbar-hide
              pb-4
            "
            >
              <AnimatePresence mode="wait">
                {getVisibleTestimonials().map((testimonial, index) => (
                  <motion.div
                    key={testimonial?.id || index}
                    className="snap-center w-full md:w-auto flex-shrink-0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 h-full">
                      <CardContent className="p-8">

                        <Quote className="w-10 h-10 text-[#D4AF37] mb-4" />

                        <p className="text-gray-700 mb-6 leading-relaxed italic">
                          "{testimonial?.testimonial}"
                        </p>

                        <div className="flex items-center gap-1 mb-4">
                          {Array((testimonial?.rating as number) || 5).fill(0).map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                          ))}
                        </div>

                        <div className="border-t border-gray-100 pt-4">
                          <p className="font-semibold text-[#2D5016]">{testimonial?.patient_name}</p>
                          {testimonial?.treatment && (
                            <p className="text-sm text-gray-500">{testimonial.treatment}</p>
                          )}
                        </div>

                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Navigation (visible on mobile only) */}
            <div className="flex justify-center gap-4 md:hidden">
              <Button
                onClick={prevSlide}
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button
                onClick={nextSlide}
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6 md:hidden">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 ${currentIndex === index
                      ? "w-8 h-2 bg-[#D4AF37] rounded-full"
                      : "w-2 h-2 bg-[#D4AF37]/30 rounded-full hover:bg-[#D4AF37]/60"
                    }`}
                />
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">No testimonials available yet.</p>
        )}
      </div>
    </section>
  );

}
