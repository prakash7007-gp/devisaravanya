"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import PageBanner from "@/components/shared/PageBanner";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export default function TreatmentsPage() {
  const { data: treatments = [], isLoading } = useQuery({
    queryKey: ["treatments"],
    queryFn: async () => {
      const res = await fetch("/api/packages");
      return res.json();
    },
  });

  const categoryColors: any = {
    pain_management: "bg-red-100 text-red-800",
    respiratory: "bg-blue-100 text-blue-800",
    women_health: "bg-pink-100 text-pink-800",
    skin_hair: "bg-purple-100 text-purple-800",
    digestive: "bg-orange-100 text-orange-800",
    lifestyle_diseases: "bg-yellow-100 text-yellow-800",
    joint_health: "bg-green-100 text-green-800",
  };

  return (
    <div>
      <PageBanner
        title="Our Treatments"
        subtitle="Comprehensive herbal treatments for various health conditions"
        backgroundImage="images/ASTHMA1.png"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5016] mb-4">
              Specialized Herbal Treatments
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Discover our comprehensive range of natural treatments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {isLoading
              ? Array(8)
                  .fill(0)
                  .map((_, i) => (
                    <Card key={i} className="border-2 overflow-hidden">
                      <Skeleton className="h-48 w-full" />
                      <CardContent className="p-6">
                        <Skeleton className="h-6 w-32 mb-3" />
                        <Skeleton className="h-8 w-3/4 mb-3" />
                        <Skeleton className="h-20 w-full" />
                      </CardContent>
                    </Card>
                  ))
              : treatments.map((treatment: any, index: number) => (
                  <motion.div
                    key={treatment.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link href={`/treatments/${treatment.id}`} className="block group">
                      <Card className="border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] hover:shadow-2xl transition-all duration-300 h-full overflow-hidden">
                        
                        <div className="relative h-56 overflow-hidden">
                        <Image
  src={treatment.image}
  alt={treatment.name}
  width={500}
  height={300}
  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
/>


                          <div className="absolute bottom-4 left-4 right-4">
                            <Badge className={`${categoryColors[treatment.category]} mb-2`}>
                              {treatment.category.replace(/_/g, " ")}
                            </Badge>
                          </div>
                        </div>

                        <CardContent className="p-6">
                          <h3 className="text-2xl font-bold text-[#2D5016] mb-3 group-hover:text-[#D4AF37] transition-colors">
                            {treatment.name}
                          </h3>

                          <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                            {treatment.description}
                          </p>

                          <div className="flex items-center text-[#D4AF37] font-semibold group-hover:text-[#2D5016] transition-colors">
                            <span>Learn More</span>
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
          </div>

        </div>
      </section>
    </div>
  );
}
