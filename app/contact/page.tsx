'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-[#f5f1e8]">
      <section className="relative h-80 bg-gradient-to-r from-[#2d5016] to-[#3d6526]">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[url('https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=1260')] bg-cover bg-center" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white/90">Get in touch with our team for appointments and inquiries</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-12 pb-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#c9a961] flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-white" size={32} />
                </div>
                <h4 className="text-lg font-bold text-[#2d5016] mb-3">Hospital Address</h4>
                <p className="text-[#5a6c3a] text-sm leading-relaxed">
                  123 Wellness Road, Ayurveda Nagar<br />
                  Kerala, India - 682001
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-12 pb-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#c9a961] flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-white" size={32} />
                </div>
                <h4 className="text-lg font-bold text-[#2d5016] mb-3">Phone Numbers</h4>
                <p className="text-[#5a6c3a] text-sm leading-relaxed">
                  +91 96765 43210<br />
                  +91 98765 43211
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-12 pb-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#c9a961] flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-white" size={32} />
                </div>
                <h4 className="text-lg font-bold text-[#2d5016] mb-3">Email Address</h4>
                <p className="text-[#5a6c3a] text-sm leading-relaxed">
                  info@shantaayurveda.com<br />
                  appointments@shantaayurveda.com
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-12 pb-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#c9a961] flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-white" size={32} />
                </div>
                <h4 className="text-lg font-bold text-[#2d5016] mb-3">Working Hours</h4>
                <p className="text-[#5a6c3a] text-sm leading-relaxed">
                  Mon - Sat: 8AM - 8PM<br />
                  Sun: 9AM - 2PM<br />
                  24/7 Emergency
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f1e8]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2d5016] mb-4">Book an Appointment</h2>
            <p className="text-[#5a6c3a] text-lg">
              Fill out the form below and our team will contact you within 2 hours
            </p>
          </div>

          <Card className="border-none shadow-2xl bg-white">
            <CardContent className="p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#2d5016] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c9a961] focus:ring-2 focus:ring-[#c9a961]/20"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#2d5016] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c9a961] focus:ring-2 focus:ring-[#c9a961]/20"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2d5016] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c9a961] focus:ring-2 focus:ring-[#c9a961]/20"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2d5016] mb-2">
                    Treatment/Service Interested In
                  </label>
                  <input
                    type="text"
                    placeholder="E.g., Panchakarma, Pain Management"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c9a961] focus:ring-2 focus:ring-[#c9a961]/20"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#2d5016] mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c9a961] focus:ring-2 focus:ring-[#c9a961]/20"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#2d5016] mb-2">
                      Preferred Time
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c9a961] focus:ring-2 focus:ring-[#c9a961]/20">
                      <option>Morning (8AM - 12PM)</option>
                      <option>Afternoon (12PM - 4PM)</option>
                      <option>Evening (4PM - 8PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2d5016] mb-2">
                    Your Health Concerns
                  </label>
                  <textarea
                    placeholder="Please describe your health concerns..."
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c9a961] focus:ring-2 focus:ring-[#c9a961]/20"
                  />
                </div>

                <Button className="w-full bg-[#2d5016] hover:bg-[#3d6526] text-white py-6 text-lg font-semibold">
                  Schedule Appointment
                </Button>

                <p className="text-center text-sm text-[#5a6c3a]">
                  Our team will review your request and contact you within 2 hours to confirm your appointment
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-0">
        <div className="w-full h-96 bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8420855!2d76.2673!3d10.0261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDAxJzM0LjAiTiA3NsKwMTYnMDIuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hospital Location"
          />
        </div>
      </section>
    </div>
  );
}
