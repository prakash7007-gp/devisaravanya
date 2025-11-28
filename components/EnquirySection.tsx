"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function EnquirySection() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setShowSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        alert("Failed to send enquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error sending enquiry:", error);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Clinic Address",
      details: ["No 6, Veeru Towers, Jawaharlal Nehru Salai, Hindustan Teleprinters Staff Quarters, SIDCO Industrial Estate, Ekkatuthangal, Chennai, Tamil Nadu 600032"],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+9173057 44144", "+91 73057 44244 "],
    },
    {
      icon: Mail,
      title: "Email Address",
      details: [ "drdevisharavanyaclinic@gmail.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 9AM - 7PM", "Sunday: Closed"],
    },
  ];

  return (
    <section id="enquiry" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#FFF8E7] border border-[#D4AF37] rounded-full mb-4">
            <span className="text-[#2D5016] font-semibold">Get In Touch</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#2D5016] mb-6">
            Send Us An Enquiry
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our treatments? We're here to help!
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-[#2D5016] mb-3">
                    {item.title}
                  </h3>

                  {item.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enquiry Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* <Card className="border-2 border-[#D4AF37] shadow-2xl">
          
              {showSuccess && (
                <Alert className="mb-6 bg-green-50 border-green-200">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    Thank you for your enquiry! We'll get back to you within 24
                    hours.
                  </AlertDescription>
                </Alert>
              )}

            
           
          </Card> */}
        </motion.div>
      </div>
    </section>
  );
}
