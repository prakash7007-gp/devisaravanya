"use client";

import React from "react";
import PageBanner from "@/components/shared/PageBanner";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  Users,
  Award,
  Stethoscope,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function BranchChennai() {
  const facilities = [
    { icon: Users, title: "Expert Doctors", description: "BAMS & MD qualified practitioners" },
    { icon: Stethoscope, title: "Modern Equipment", description: "Latest diagnostic facilities" },
    { icon: Award, title: "25+ Years Experience", description: "Trusted by thousands" },
    { icon: Calendar, title: "Easy Appointments", description: "Quick booking system" },
  ];

  const specialties = [
    "Panchakarma Therapy",
    "Pain Management",
    "Women's Health Care",
    "Skin & Hair Treatment",
    "Respiratory Care",
    "Digestive Disorders",
  ];

  return (
    <div>
      <PageBanner
        title="Chennai Branch"
        subtitle="Experience authentic Ayurvedic care in the heart of Chennai"
        backgroundImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200"
      />

      {/* ✅ Branch Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* ✅ Left Text Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-[#FFF8E7] border border-[#D4AF37] rounded-full mb-4">
                <span className="text-[#2D5016] font-semibold">Chennai Branch</span>
              </div>

              <h2 className="text-4xl font-bold text-[#2D5016] mb-6">
                Your Wellness Destination in Chennai
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our Chennai branch is strategically located in the heart of the city, providing
                easy access to authentic Ayurvedic treatments. With state-of-the-art facilities
                and experienced practitioners, we offer comprehensive healthcare solutions.
              </p>

              {/* ✅ Contact Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-4 bg-[#FFF8E7] rounded-xl">
                  <MapPin className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#2D5016]">Address</p>
                    <p className="text-gray-600">No 6, Veeru Towers, Jawaharlal Nehru Salai, Hindustan Teleprinters Staff Quarters, SIDCO Industrial Estate, Ekkatuthangal, Chennai, Tamil Nadu 600032</p>
                  </div>
                </div>
                

                <div className="flex items-start gap-3 p-4 bg-[#FFF8E7] rounded-xl">
                  <Phone className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#2D5016]">Phone</p>
                    <p className="text-gray-600">+91 73057 44144</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-[#FFF8E7] rounded-xl">
                  <Mail className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#2D5016]">Email</p>
                    <p className="text-gray-600">drdevisharavanyaclinic@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-[#FFF8E7] rounded-xl">
                  <Clock className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#2D5016]">Working Hours</p>
                    <p className="text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <Link href="/appointment">
                <Button className="ayurveda-gradient text-white px-8 py-6 text-lg">
                  Book Appointment at Chennai
                </Button>
              </Link>
            </motion.div>

            {/* ✅ Right Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800"
                alt="Chennai Branch"
                width={800}
                height={600}
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 border-t-4 border-[#D4AF37]">
                <p className="text-4xl font-bold text-[#2D5016] mb-1">5000+</p>
                <p className="text-gray-600">Patients Treated</p>
              </div>
            </motion.div>
          </div>

          {/* ✅ Facilities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-[#2D5016] text-center mb-12">
              Our Facilities
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {facilities.map((facility, index) => (
                <Card
                  key={index}
                  className="border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] hover:shadow-xl transition-all"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                      <facility.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-[#2D5016] mb-2">
                      {facility.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{facility.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* ✅ Specialties */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-[#2D5016] text-center mb-12">
              Specialties Available
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {specialties.map((specialty, index) => (
                <Card
                  key={index}
                  className="border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all"
                >
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#D4AF37]" />
                    <p className="text-gray-700 font-medium">{specialty}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ✅ Map Section */}
      <section className="py-20 bg-gradient-to-b from-[#FFF8E7] to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-[#2D5016] mb-4">Find Us on Map</h3>
            <p className="text-gray-600">Easy to locate, convenient to visit</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#D4AF37]/20"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0551750903167!2d76.29193931479484!3d9.983695992839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTknMDEuMyJOIDc2wrAxNyczMy43IkU!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chennai Branch Location"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
