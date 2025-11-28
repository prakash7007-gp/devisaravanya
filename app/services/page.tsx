"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Heart, Shield } from 'lucide-react';
import Link from "next/link";

// ✅ Function to generate clean URLs
const slugify = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const services = [
  {
    name: 'Panchakarma Therapy',
    slug: 'panchakarma-therapy',
    image: 'https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Complete detoxification and rejuvenation through the five therapeutic procedures of Ayurveda.',
    treatments: ['Vamana', 'Virechana', 'Basti', 'Nasya', 'Raktamokshana']
  },
  {
    name: 'Pain Management',
    image: 'https://images.pexels.com/photos/3822755/pexels-photo-3822755.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Specialized treatments for chronic pain conditions using natural Ayurvedic methods.',
    treatments: ['Kati Basti', 'Janu Basti', 'Greeva Basti', 'Pinda Sweda']
  },
  {
    name: 'Neurological Disorders',
    image: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Treatment for nervous system disorders including paralysis, neuropathy, and tremors.',
    treatments: ['Shirodhara', 'Shiro Basti', 'Nasya', 'Abhyanga']
  },
  {
    name: 'Skin & Beauty Care',
    image: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Natural treatments for skin disorders and beauty enhancement through Ayurvedic protocols.',
    treatments: ['Mukha Lepam', 'Udvartana', 'Raktashodhana', 'Herbal Facials']
  },
  {
    name: 'Respiratory Disorders',
    image: 'https://images.pexels.com/photos/3997987/pexels-photo-3997987.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Comprehensive care for asthma, bronchitis, and other respiratory conditions.',
    treatments: ['Steam Inhalation', 'Nasya', 'Vamana', 'Herbal Medicines']
  },
  {
    name: 'General Ayurveda',
    image: 'https://images.pexels.com/photos/4047066/pexels-photo-4047066.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Ayurvedic treatment for various health conditions through herbal medicines and diet.',
    treatments: ['Consultations', 'Herbal Medicines', 'Diet Plans', 'Lifestyle Guidance']
  },
  {
    name: 'Panchakarma Department',
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Specialized department for traditional Panchakarma treatments with experienced therapists.',
    treatments: ['Vamana Karma', 'Virechana Karma', 'Basti Karma', 'Nasya Karma']
  },
  {
    name: 'Skin & Hair Care',
    image: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Holistic treatments for skin diseases and hair problems using natural herbs.',
    treatments: ['Shiro Abhyanga', 'Mukha Lepam', 'Udvartana', 'Hair Therapy']
  },
  {
    name: 'Stress Management',
    image: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Comprehensive programs to manage stress, anxiety, and improve mental wellness.',
    treatments: ['Shirodhara', 'Meditation', 'Yoga', 'Pranayama']
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-[#f5f1e8]">
      {/* ✅ Banner */}
      <section className="relative h-80 bg-gradient-to-r from-[#2d5016] to-[#3d6526]">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[url('https://images.pexels.com/photos/3997987/pexels-photo-3997987.jpeg?auto=compress&cs=tinysrgb&w=1260')] bg-cover bg-center" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-white/90">
            Specialized Ayurvedic department for comprehensive healthcare
          </p>
        </div>
      </section>

      {/* ✅ Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2d5016] mb-4">
              Comprehensive Herbal Services
            </h2>
            <p className="text-[#5a6c3a] text-lg max-w-3xl mx-auto">
              We specialize in a diverse range of Ayurvedic services, offering natural and holistic treatments tailored to your wellness goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const slug = slugify(service.name);

              return (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                      {/* ✅ Image */}
                      <div className="relative h-64 md:h-auto">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* ✅ Content */}
                      <div className="p-6 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-[#2d5016] mb-3">
                          {service.name}
                        </h3>

                        <p className="text-[#5a6c3a] mb-4 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-[#2d5016]">Key Treatments:</p>

                          <div className="flex flex-wrap gap-2">
                            {service.treatments.map((treat, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="border-[#c9a961] text-[#5a6c3a]"
                              >
                                {treat}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* ✅ Book Appointment */}
                        <Link href="/contact">
                          <button className="mt-4 text-[#c9a961] hover:text-[#2d5016] font-semibold">
                            Book Appointment →
                          </button>
                        </Link>

                        {/* ✅ ✅ View Details button */}
                        <Link href={`/services/${slug}`}>
                          <button className="mt-2 text-[#2d5016] hover:text-[#c9a961] font-semibold">
                            View Details →
                          </button>
                        </Link>
                      </div>

                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ✅ Why Choose Us */}
      <section className="py-16 bg-[#f5f1e8]">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2d5016] mb-4">
              Why Choose Our Services
            </h2>
            <p className="text-[#5a6c3a] text-lg">
              Experience the difference of authentic Ayurvedic care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <Card className="shadow-lg bg-white">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#c9a961] flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-bold text-[#2d5016] mb-3">Expert Practitioners</h4>
                <p className="text-[#5a6c3a]">
                  Highly qualified Ayurvedic doctors & experienced therapists
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-white">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#c9a961] flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-bold text-[#2d5016] mb-3">Authentic Treatments</h4>
                <p className="text-[#5a6c3a]">
                  Traditional Ayurvedic therapies with proven protocols
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-white">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#c9a961] flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-bold text-[#2d5016] mb-3">Modern Facilities</h4>
                <p className="text-[#5a6c3a]">
                  Modern infrastructure blended with authentic Ayurveda
                </p>
              </CardContent>
            </Card>

          </div>

        </div>
      </section>
    </div>
  );
}
