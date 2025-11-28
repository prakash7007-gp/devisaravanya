import { NextResponse } from "next/server";
import { treatmentPackages } from "../../data/packages";

export async function GET() {
  return NextResponse.json(treatmentPackages);
}
