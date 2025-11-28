import { NextResponse } from "next/server";

// Mock testimonial data (replace with DB or Google Sheet later)
const testimonials = [
  {
    id: 1,
    patient_name: "Priya K.",
    testimonial:
      "Dr. Devi Saravanya helped me recover completely through herbal treatment. Truly amazing!",
    rating: 5,
    treatment: "Joint Pain Therapy",
  },
  {
    id: 2,
    patient_name: "Arjun M.",
    testimonial:
      "I had chronic migraines for years — after just 2 months of treatment, I feel brand new.",
    rating: 5,
    treatment: "Migraine Relief",
  },
  {
    id: 3,
    patient_name: "Sita R.",
    testimonial:
      "Professional care, natural remedies, and outstanding results. Highly recommend!",
    rating: 4,
    treatment: "Detox & Wellness",
  },
  {
    id: 4,
    patient_name: "Sita R.",
    testimonial:
      "Professional care, natural remedies, and outstanding results. Highly recommend!",
    rating: 4,
    treatment: "Detox & Wellness",
  },
];

export async function GET() {
  return NextResponse.json(testimonials);
}
