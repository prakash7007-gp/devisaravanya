"use client";

import PageBanner from "@/components/shared/PageBanner";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Branches() {
  const branches = [
    {
      name: "Kochi Branch",
      city: "Kochi",
      address: "MG Road, Ravipuram, Kochi - 682016",
      phone: "+91 98765 11111",
      email: "kochi@drdevi.com",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
      patients: "5000+",
      slug: "kochi",
    },
    {
      name: "Trivandrum Branch",
      city: "Trivandrum",
      address: "Statue Junction, Trivandrum - 695001",
      phone: "+91 98765 22222",
      email: "trivandrum@drdevi.com",
      image:
        "https://images.unsplash.com/photo-1631248055137-bd3019a3a9fd?w=800",
      patients: "6000+",
      slug: "trivandrum",
    },
    {
      name: "Thrissur Branch",
      city: "Thrissur",
      address: "Round East, Thrissur - 680001",
      phone: "+91 98765 33333",
      email: "thrissur@drdevi.com",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800",
      patients: "4500+",
      slug: "thrissur",
    },
    {
      name: "Kozhikode Branch",
      city: "Kozhikode",
      address: "SM Street, Kozhikode - 673001",
      phone: "+91 98765 44444",
      email: "kozhikode@drdevi.com",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
      patients: "5500+",
      slug: "kozhikode",
    },
    {
      name: "Kannur Branch",
      city: "Kannur",
      address: "Fort Road, Kannur - 670001",
      phone: "+91 98765 55555",
      email: "kannur@drdevi.com",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800",
      patients: "4000+",
      slug: "kannur",
    },
  ];

  return (
    <div>
      <PageBanner
        title="Our Branches"
        subtitle="Find the nearest DR. Devi Sharavanya Herbal Clinic branch near you"
        backgroundImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200"
      />

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#FFF8E7] border border-[#D4AF37] rounded-full mb-4">
              <span className="text-[#2D5016] font-semibold">
                5 Locations Across Kerala
              </span>
            </div>

            <h2 className="text-4xl font-bold text-[#2D5016] mb-6">
              Serving Communities Across Kerala
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              With five strategically located branches across Kerala, we bring
              authentic Ayurvedic healthcare closer to you. Each branch is
              equipped with modern facilities while maintaining the essence of
              traditional healing practices.
            </p>
          </motion.div>

          {/* Branches Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {branches.map((branch, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] hover:shadow-2xl transition-all duration-300 h-full overflow-hidden group">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={branch.image}
                      alt={branch.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                    {/* City Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full">
                        <p className="text-[#2D5016] font-bold text-sm">
                          {branch.city}
                        </p>
                      </div>
                    </div>

                    {/* Patients Count */}
                    <div className="absolute bottom-4 right-4">
                      <div className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-lg">
                        <p className="text-xs text-gray-600">Patients</p>
                        <p className="text-xl font-bold text-[#2D5016]">
                          {branch.patients}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-[#2D5016] mb-4 group-hover:text-[#D4AF37] transition-colors">
                      {branch.name}
                    </h3>

                    {/* Contact Info */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-[#D4AF37]" />
                        <p className="text-gray-600 text-sm">{branch.address}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-[#D4AF37]" />
                        <a
                          href={`tel:${branch.phone}`}
                          className="text-gray-600 text-sm hover:text-[#2D5016]"
                        >
                          {branch.phone}
                        </a>
                      </div>

                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-[#D4AF37]" />
                        <a
                          href={`mailto:${branch.email}`}
                          className="text-gray-600 text-sm hover:text-[#2D5016] truncate"
                        >
                          {branch.email}
                        </a>
                      </div>

                      <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                        <Clock className="w-4 h-4 text-[#D4AF37]" />
                        <p className="text-gray-600 text-sm">
                          Mon - Sat: 9AM - 7PM
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <Link href={`/branches/${branch.slug}`}>
                        <Button
                          variant="outline"
                          className="w-full border-2 border-[#2D5016] text-[#2D5016] hover:bg-[#2D5016] hover:text-white group/btn"
                        >
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>

                      <Link href="/book-appointment">
                        <Button className="w-full ayurveda-gradient text-white">
                          Book Appointment
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Branches */}
      <section className="py-20 bg-gradient-to-b from-[#FFF8E7] to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#2D5016] mb-6">
              Why Choose Our Branches
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Consistent quality care across all locations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expert Doctors",
                description:
                  "BAMS & MD qualified Ayurvedic practitioners at every branch",
              },
              {
                title: "Modern Facilities",
                description:
                  "State-of-the-art infrastructure with traditional healing touch",
              },
              {
                title: "Authentic Treatments",
                description:
                  "Traditional Panchakarma and herbal therapies",
              },
              {
                title: "Easy Access",
                description:
                  "Convenient locations across Kerala for your comfort",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-2 border-[#D4AF37]/20 hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-white">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#2D5016] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#2D5016] to-[#4A7C2F] rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              Visit Your Nearest Branch Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Experience the healing power of authentic Ayurveda at any of our
              locations
            </p>
            <Link href="/book-appointment">
              <Button className="bg-white text-[#2D5016] hover:bg-[#FFF8E7] px-8 py-6 text-lg font-semibold">
                Book Your Appointment Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
