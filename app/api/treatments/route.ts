import { NextResponse } from "next/server";

const treatmentPackages = [
  {
    id: 1,
    nameKey: "treatments.knee.name",
    descKey: "treatments.knee.description",
    duration: "14 Days",
    includesKey: "treatments.knee.includes",
    category: "joint_health",
    image: "/images/treatments/pcod.jpg"
  },
  {
    id: 2,
    nameKey: "treatments.asthma.name",
    descKey: "treatments.asthma.description",
    duration: "10 Days",
    includesKey: "treatments.asthma.includes",
    category: "respiratory"
  },
  {
    id: 3,
    nameKey: "treatments.pcod.name",
    descKey: "treatments.pcod.description",
    duration: "21 Days",
    includesKey: "treatments.pcod.includes",
    category: "women_health"
  },
  {
    id: 4,
    nameKey: "treatments.hairfall.name",
    descKey: "treatments.hairfall.description",
    duration: "15 Days",
    includesKey: "treatments.hairfall.includes",
    category: "skin_hair"
  },
  {
    id: 5,
    nameKey: "treatments.arthritis.name",
    descKey: "treatments.arthritis.description",
    duration: "18 Days",
    includesKey: "treatments.arthritis.includes",
    category: "joint_health"
  },
  {
    id: 6,
    nameKey: "treatments.diabetes.name",
    descKey: "treatments.diabetes.description",
    duration: "30 Days",
    includesKey: "treatments.diabetes.includes",
    category: "lifestyle_diseases"
  }
];

export async function GET() {
  return NextResponse.json(treatmentPackages);
}
