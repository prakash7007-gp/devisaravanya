import { NextResponse } from "next/server";
import { servicesList } from "./data";

export async function GET() {
  return NextResponse.json(servicesList);
}
