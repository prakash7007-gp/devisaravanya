import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  console.log("Received Enquiry:", data);

  // ✅ (Optional) You can send this data to Google Sheets or a database here.

  return NextResponse.json(  
    { success: true, message: "Enquiry received successfully!" },
    { status: 200 }
  );
}
