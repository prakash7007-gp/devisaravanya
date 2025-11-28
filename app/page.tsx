// app/page.tsx
"use client";
import React from "react";
import Link from "next/link";
// import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Heart, Shield, Activity, Users, Award } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
import HeroCarousel from "@/components/HeroCarousel";
import WelcomeSection from "@/components/WelcomeSection";
import TherapiesSection from "@/components/TherapiesSection";
import MissionSection from "@/components/MissionSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import YouTubeSection from "@/components/YouTubeSection";
import AppointmentSection from "@/components/AppointmentSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EnquirySection from "@/components/EnquirySection";

export default function Home() {
  return (
    <div>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Welcome Section */}
      <WelcomeSection />

      {/* Therapies Section - NEW */}
      {/* <TherapiesSection /> */}

      {/* Mission Section */}
      <MissionSection />

      {/* Why Choose Us */}
      <WhyChooseSection />

      {/* YouTube Channel */}
      <YouTubeSection />

      {/* Book Appointment */}
      {/* <AppointmentSection /> */}

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Enquiry Form */}
      {/* <EnquirySection /> */}
    </div>
  );
}