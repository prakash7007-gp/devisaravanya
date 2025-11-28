import Image from "next/image";
import Link from "next/link";

// ✅ Needed for static export
export const dynamicParams = true;

import { treatmentPackages } from "../../data/packages";

export async function generateStaticParams() {
  // Use the local data module instead of fetching localhost during build
  const treatments = treatmentPackages;

  return treatments.map((t: any) => ({
    id: t.id.toString(),
  }));
}

export const revalidate = 0

export default async function TreatmentDetailPage({ params }: any) {
  const { id } = params;

  const allTreatments = treatmentPackages;

  const treatment = allTreatments.find((t: any) => t.id.toString() === id);

  if (!treatment) {
    return (
      <div className="p-20 text-center text-2xl font-semibold">
        Treatment Not Found
      </div>
    );  }

    
  return (
    <div className="bg-white">
      {/* ✅ Banner Section */}
      <div className="relative h-[380px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1520828713536-0f1a5f04b6ca?w=1200"
          alt={treatment.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-28">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {treatment.name}
          </h1>
          <p className="text-lg text-gray-200 mt-3 max-w-2xl">
            Natural herbal treatment for {treatment.name.toLowerCase()}
          </p>
        </div>
      </div>

      {/* ✅ Back Button */}
      <div className="container mx-auto px-4 mt-10">
        <Link href="/treatments">
          <button className="px-4 py-2 bg-gray-100 border rounded-lg hover:bg-gray-200 text-sm">
            ← Back to Treatments
          </button>
        </Link>
      </div>

      {/* ✅ Main Content Section */}
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* ✅ Left Content */}
        <div className="lg:col-span-2">

          {/* Title */}
          <h2 className="text-3xl font-bold text-[#2D5016] mb-4">
            {treatment.name}
          </h2>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-8">
            {treatment.description}
          </p>

          {/* Big Display Image */}
          <div className="w-full h-[320px] rounded-xl overflow-hidden mb-12 shadow-lg">
       <Image
  src={treatment.image}
  alt={treatment.name}
  width={1200}
  height={600}
  className="object-cover w-full h-full rounded-xl"
/>

          </div>

          {/* ✅ What's Included */}
          <h3 className="text-2xl font-bold text-[#2D5016] mb-4">
            What's Included in Treatment
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {treatment.includes?.map((item: string, i: number) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 border rounded-lg bg-white shadow-sm"
              >
                ✅ <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          {/* ✅ Why Choose Us Section */}
          <div className="bg-[#FFF8E7] border-l-8 border-[#D4AF37] p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-[#2D5016] mb-4">
              Why Choose Our Treatment?
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✅ 100% natural herbs with no side effects</li>
              <li>✅ Personalized treatment plans</li>
              <li>✅ Experienced Ayurvedic doctors</li>
              <li>✅ Proven results with thousands of patients</li>
              <li>✅ Follow-up care & lifestyle guidance</li>
            </ul>
          </div>
        </div>

        {/* ✅ Right Sidebar: Treatment Details */}
        <div className="lg:col-span-1">
          <div className="p-6 bg-white border rounded-xl shadow-xl">
            <h3 className="text-xl font-bold text-[#2D5016] mb-4">
              Treatment Details
            </h3>

            {/* ✅ Duration */}
            <div className="p-4 bg-[#FFF8E7] border rounded-lg mb-6">
              <p className="text-gray-600 text-sm">Duration</p>
              <p className="text-xl font-bold text-[#2D5016]">
                {treatment.duration}
              </p>
            </div>

            {/* ✅ Includes Summary */}
            <ul className="space-y-3 mb-6">
              <li>✅ Expert consultation included</li>
              <li>✅ Customized herbal medicines</li>
              <li>✅ Diet & lifestyle guidance</li>
              <li>✅ Regular follow-ups</li>
            </ul>

            {/* ✅ Book Button */}
            <Link href="/contact">
              <button className="w-full bg-[#2D5016] text-white py-3 rounded-lg font-semibold hover:bg-[#214012]">
                Book Consultation
              </button>
            </Link>

            <p className="text-center text-xs text-gray-500 mt-3">
              Our team will contact you within 2 hours
            </p>

            {/* ✅ Need Help Box */}
            <div className="mt-6 p-4 border rounded-lg bg-white">
              <p className="font-semibold mb-2">Need Help?</p>
              <p className="text-sm text-gray-700 mb-1">
                Our experts are here to help.
              </p>
              <p className="text-sm"><strong>Phone:</strong> +91 98765 43210</p>
              <p className="text-sm"><strong>Email:</strong> info@drdevi.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
