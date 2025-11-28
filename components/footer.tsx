"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2d5016] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {/* ✅ Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
                <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png" // Update path to your logo
                alt="Dr. Devi Saravanya Logo"
                width={120}
                height={60}
                className="object-contain"
              />
            </Link>
              <h3 className="font-bold">DR. Devi Saravanya</h3>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Your trusted destination for authentic Ayurvedic treatments and holistic wellness care.
            </p>
          </div>

          {/* ✅ Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li><Link href="/" className="hover:text-[#c9a961] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#c9a961] transition-colors">About Us</Link></li>
              <li><Link href="/treatments" className="hover:text-[#c9a961] transition-colors">Treatments</Link></li>
              <li><Link href="/services" className="hover:text-[#c9a961] transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-[#c9a961] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* ✅ Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Contact Info</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>
                  No 6, Veeru Towers, Jawaharlal Nehru Salai, Hindustan Teleprinters Staff Quarters, SIDCO Industrial Estate, Ekkatuthangal, Chennai, Tamil Nadu 600032
                </span>
              </li>

              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a
                  href="tel:+919676543210"
                  className="hover:text-[#c9a961]"
                >
                  +91 73057 44244
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:drdeviSaravanyaclinic@gmail.com"
                  className="hover:text-[#c9a961]"
                >
                  drdeviSaravanyaclinic@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* ✅ Working Hours */}
          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Working Hours</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-1" />
                <div>
                  <p>Mon - Sat: 10AM - 7PM</p>
                  <p>Sun: 9AM - 2PM</p>
                  {/* <p className="mt-1">24/7 Emergency</p> */}
                </div>
              </li>
            </ul>

            {/* ✅ Social Icons */}
            <div className="flex gap-3 mt-4">
              <a href="#" className="hover:text-[#c9a961] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[#c9a961] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-[#c9a961] transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* ✅ Bottom Bar */}
        <div className="border-t border-[#3d6526] mt-6 sm:mt-8 pt-4 sm:pt-6 text-center text-xs sm:text-sm text-gray-300">
          <p>&copy; 2024 DR. Devi Saravanya Herbal Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
