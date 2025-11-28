// app/services/[slug]/page.tsx
import Image from "next/image";
import React from "react";
import Link from "next/link";

// ✅ Central Services Data (normalized slugs)
// NOTE: keep this data internal to this page to avoid extra module exports
// which break Next's generated type checks in `.next/types`.
const services = [
  {
    name: "Panchakarma Therapy",
    slug: "panchakarma-therapy",
    banner:
      "https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=1260",
    image:
      "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=1260",
    description:
      "A complete detoxification and rejuvenation process that removes deep-rooted toxins, balances Tridoshas, improves immunity, and restores mental clarity.",
    treatments: ["Vamana", "Virechana", "Basti", "Nasya", "Raktamokshana"],
    benefits: [
      "Deep detoxification",
      "Boosts immunity",
      "Balances hormones",
      "Improves digestion",
      "Enhances energy levels",
    ],
  },

  {
    name: "Pain Management",
    slug: "pain-management",
    banner:
      "https://images.pexels.com/photos/4047070/pexels-photo-4047070.jpeg?auto=compress&cs=tinysrgb&w=1260",
    image:
      "https://images.pexels.com/photos/3822755/pexels-photo-3822755.jpeg?auto=compress&cs=tinysrgb&w=1260",
    description:
      "Holistic pain relief for chronic joint, muscle, and nerve pain using traditional Ayurvedic therapies.",
    treatments: ["Kati Basti", "Janu Basti", "Pizhichil", "Abhyanga", "Elakizhi"],
    benefits: [
      "Reduces inflammation",
      "Relieves muscle stiffness",
      "Improves joint lubrication",
      "Enhances mobility",
      "Long-term natural pain relief",
    ],
  },

  {
  name: "Neurological Disorders",
  slug: "neurological-disorders",
 // normalized
    banner:
      "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=1260",
    image:
      "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=1260",
    description:
      "Therapies designed to improve nerve functioning, coordination, paralysis recovery, and neurological balance.",
    treatments: ["Shirodhara", "Shiro Basti", "Nasya", "Abhyanga"],
    benefits: [
      "Improves brain function",
      "Reduces tremors",
      "Supports paralysis recovery",
      "Strengthens the nervous system",
      "Improves sleep & relaxation",
    ],
  },

  {
    name: "Skin & Hair Care",
    slug: "skin-hair-care", // normalized
    banner:
      "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=1260",
    image:
      "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=1260",
    description:
      "Traditional Ayurvedic beauty and skin therapies to restore natural glow and treat chronic skin conditions.",
    treatments: ["Mukha Lepam", "Udvartana", "Herbal Facials", "Raktashodhana"],
    benefits: [
      "Reduces pigmentation",
      "Controls acne & allergies",
      "Brightens skin tone",
      "Improves texture",
      "Promotes natural glow",
    ],
  },

  {
    name: "Respiratory Care",
    slug: "respiratory-disorders",
    banner:
      "https://images.pexels.com/photos/3997987/pexels-photo-3997987.jpeg?auto=compress&cs=tinysrgb&w=1260",
    image:
      "https://images.pexels.com/photos/3997987/pexels-photo-3997987.jpeg?auto=compress&cs=tinysrgb&w=1260",
    description:
      "Effective Ayurvedic therapies for asthma, bronchitis, sinusitis, and long-term respiratory disorders.",
    treatments: ["Vamana", "Nasya", "Steam Therapy", "Herbal Medicines"],
    benefits: [
      "Strengthens lungs",
      "Improves breathing capacity",
      "Reduces allergies",
      "Clears mucus",
      "Prevents recurring respiratory issues",
    ],
  },

  {
    name: "General Ayurveda",
    slug: "general-ayurveda",
    banner:
      "https://images.pexels.com/photos/4047066/pexels-photo-4047066.jpeg?auto=compress&cs=tinysrgb&w=1260",
    image:
      "https://images.pexels.com/photos/4047066/pexels-photo-4047066.jpeg?auto=compress&cs=tinysrgb&w=1260",
    description:
      "Holistic treatment for common health conditions through Ayurvedic medicines, diet, and lifestyle.",
    treatments: ["Herbal medicines", "Diet consultation", "Lifestyle therapy", "Detox guidance"],
    benefits: [
      "Improves overall health",
      "Holistic lifestyle correction",
      "Prevents lifestyle disorders",
      "Balances body energies",
      "Enhances digestion & immunity",
    ],
  },

  {
    name: "Stress Management",
    slug: "stress-management",
    banner:
      "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=1260",
    image:
      "https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=1260",
    description:
      "Relaxation therapies to calm the mind, reduce anxiety, and enhance emotional well-being.",
    treatments: ["Shirodhara", "Yoga", "Meditation", "Pranayama"],
    benefits: [
      "Reduces anxiety",
      "Improves sleep quality",
      "Balances hormones",
      "Enhances focus",
      "Improves emotional stability",
    ],
  },

  {
    name: "Women’s Health Care",
    slug: "womens-health-care",
    banner:
      "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=1260",
    image:
      "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=1260",
    description:
      "Holistic Ayurvedic care for PCOS, infertility, menstrual disorders, and hormonal imbalance.",
    treatments: ["Yoni Pichu", "Uttara Basti", "Rasayana therapy"],
    benefits: [
      "Balances hormones",
      "Improves fertility",
      "Regulates menstrual cycle",
      "Strengthens reproductive system",
      "Enhances vitality & mood",
    ],
  },

  {
    name: "Digestive Health",
    slug: "digestive-health",
    banner:
      "https://images.pexels.com/photos/4047066/pexels-photo-4047066.jpeg?auto=compress&cs=tinysrgb&w=1260",
    image:
      "https://images.pexels.com/photos/4047066/pexels-photo-4047066.jpeg?auto=compress&cs=tinysrgb&w=1260",
    description:
      "Natural Ayurvedic therapies to treat acidity, IBS, constipation, bloating, and gut imbalance.",
    treatments: ["Virechana", "Basti", "Herbal Detox", "Diet Therapy"],
    benefits: [
      "Improves digestion",
      "Reduces acidity",
      "Boosts appetite",
      "Strengthens intestines",
      "Removes toxins",
    ],
  },

  {
    name: "Joint & Bone Care",
    slug: "joint-bone-care",
    banner:
      "https://images.pexels.com/photos/4047070/pexels-photo-4047070.jpeg?auto=compress&cs=tinysrgb&w=1260",
    image:
      "https://images.pexels.com/photos/4047070/pexels-photo-4047070.jpeg?auto=compress&cs=tinysrgb&w=1260",
    description:
      "Ayurvedic solutions for arthritis, osteoporosis, and age-related joint degeneration.",
    treatments: ["Janu Basti", "Kati Basti", "Oil massage", "Herbal poultice"],
    benefits: [
      "Improves bone strength",
      "Reduces joint stiffness",
      "Promotes lubrication",
      "Relieves arthritis pain",
      "Enhances mobility",
    ],
  },

  // ... add the remaining 10 entries you already have (weight-management, diabetes-management, etc.)
];

// required for static export behavior
export const dynamic = "force-static";

// ✅ Generate static params for every slug
export function generateStaticParams() {
  return services.map((service) => ({
    slug: String(service.slug).toLowerCase(),
  }));
}

// Page component
export default function ServiceDetailsPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return (
      <div className="p-10 text-center text-red-600 text-xl">
        Service Not Found
      </div>
    );
  }

  return (
    <div className="bg-[#f5f1e8] pb-20">
      {/* ... hero + content as you already have ... */}
      <section className="relative h-80 md:h-96 bg-gradient-to-r from-[#2d5016] to-[#3d6526]">
        <div className="absolute inset-0 opacity-30">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${service.banner})` }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            {service.name}
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Authentic Ayurvedic Healing for Complete Wellness
          </p>
        </div>
      </section>
            <div className="container mx-auto px-4 mt-10">
        <Link href="/services">
          <button className="px-4 py-2 bg-gray-100 border rounded-lg hover:bg-gray-200 text-sm">
            ← Back to Services
          </button>
        </Link>
      </div>

      {/* ... main content ... */}
            <section className="max-w-7xl mx-auto px-4 mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* ✅ LEFT CONTENT */}
        <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-lg">

          {/* ✅ Title + Description */}
          <h2 className="text-3xl font-bold text-[#2d5016] mb-4">
            {service.name}
          </h2>

          <p className="text-[#5a6c3a] text-lg leading-relaxed mb-6">
            {service.description}
          </p>

          {/* ✅ IMAGE */}
          <Image
            src={service.image}
            alt={service.name}
            width={800}
            height={450}
            className="rounded-xl w-full object-cover shadow-md"
          />

          {/* ✅ KEY TREATMENTS */}
          <h3 className="text-2xl font-bold text-[#2d5016] mt-10 mb-4">
            Key Treatments Used
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {service.treatments.map((t, i) => (
              <div
                key={i}
                className="p-3 bg-[#f5f1e8] border border-[#c9a961]/40 rounded-lg text-[#2d5016] font-medium"
              >
                ✅ {t}
              </div>
            ))}
          </div>

          {/* ✅ BENEFITS SECTION */}
          <h3 className="text-2xl font-bold text-[#2d5016] mt-10 mb-4">
            Benefits of This Treatment
          </h3>

          <ul className="space-y-3">
            {service.benefits.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-[#5a6c3a] text-lg bg-[#fff7e3] p-3 rounded-lg border border-[#e8d8a6]"
              >
                <span className="text-[#2d5016] font-bold">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ RIGHT SIDEBAR */}
        <aside className="bg-white shadow-lg p-6 rounded-xl border border-[#c9a961]/40 h-fit">
          <h3 className="text-xl font-bold text-[#2d5016] mb-3">
            Book a Consultation
          </h3>

          <p className="text-[#5a6c3a] mb-5">
            Our experts are ready to guide you with the best Ayurvedic treatment plan.
          </p>

          <a
            href="/contact"
            className="block w-full text-center bg-[#2d5016] text-white py-3 rounded-lg font-semibold hover:bg-[#3d6526] transition"
          >
            Book Appointment →
          </a>

          <p className="text-xs text-gray-500 mt-4">
            Our team will respond within 2 hours.
          </p>
        </aside>

      </section>
    </div>
  );
}
