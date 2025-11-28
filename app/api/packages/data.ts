// ✅ Shared Treatment Data (used by all API routes)

// File: app/api/packages/route.ts

// DO NOT EXPORT THIS
const treatmentPackages = [
  {
    id: 1,
    name: "Basic Treatment",
    description: "A simple herbal treatment package.",
    duration: "30 minutes",
    includes: ["Massage", "Oil Therapy"],
    category: "General",
    image: "/images/treatment1.jpg",
  },
  {
    id: 2,
    name: "Advanced Treatment",
    description: "Advanced Ayurvedic treatment for deep healing.",
    duration: "60 minutes",
    includes: ["Full Body Massage", "Steam Therapy"],
    category: "Ayurveda",
    image: "/images/treatment2.jpg",
  },
];

// ONLY EXPORT GET — nothing else
export async function GET() {
  return Response.json(treatmentPackages);
}
