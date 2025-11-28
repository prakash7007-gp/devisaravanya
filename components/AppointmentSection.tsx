"use client";

import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, CheckCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function AppointmentSection() {
  const queryClient = useQueryClient();
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    patient_name: "",
    email: "",
    phone: "",
    service: "",
    preferred_date: "",
    preferred_time: "",
    message: "",
  });

  // ✅ Use fetch instead of base44
  const createAppointmentMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to submit appointment");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
      setShowSuccess(true);
      setFormData({
        patient_name: "",
        email: "",
        phone: "",
        service: "",
        preferred_date: "",
        preferred_time: "",
        message: "",
      });
      setTimeout(() => setShowSuccess(false), 5000);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createAppointmentMutation.mutate(formData);
  };

  return (
    <section id="appointment" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 bg-[#FFF8E7] border border-[#D4AF37] rounded-full mb-4">
              <span className="text-[#2D5016] font-semibold">Book Appointment</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#2D5016] mb-6">
              Start Your Healing Journey
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Schedule a consultation with DR. Devi Saravanya. We'll create a
              personalized herbal treatment plan based on your unique health needs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#FFF8E7] to-[#F5E6D3] rounded-xl border border-[#D4AF37]/30">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#2D5016] mb-2 text-lg">
                    Initial Consultation Process
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4A7C2F]" />
                      Complete health assessment
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4A7C2F]" />
                      Personalized herbal treatment plan
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4A7C2F]" />
                      Diet and lifestyle recommendations
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Section — Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg border-[#D4AF37]/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="patient_name">Full Name</Label>
                    <Input
                      id="patient_name"
                      value={formData.patient_name}
                      onChange={(e) =>
                        setFormData({ ...formData, patient_name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">Treatment / Service</Label>
                    <Input
                      id="service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="preferred_date">Preferred Date</Label>
                      <Input
                        id="preferred_date"
                        type="date"
                        value={formData.preferred_date}
                        onChange={(e) =>
                          setFormData({ ...formData, preferred_date: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="preferred_time">Preferred Time</Label>
                      <Input
                        id="preferred_time"
                        type="time"
                        value={formData.preferred_time}
                        onChange={(e) =>
                          setFormData({ ...formData, preferred_time: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Notes</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={3}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#2D5016] hover:bg-[#4A7C2F] text-white font-semibold py-3"
                    disabled={createAppointmentMutation.isPending}
                  >
                    {createAppointmentMutation.isPending
                      ? "Submitting..."
                      : "Book Appointment"}
                  </Button>
                </form>

                {showSuccess && (
                  <Alert className="mt-6 bg-green-50 border-green-200 text-green-800">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <AlertDescription>
                      Appointment booked successfully! We’ll contact you soon.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
