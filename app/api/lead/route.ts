import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { fullName, phone, email } = body;

    if (!fullName || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Normalize phone (remove + if user adds it)
    const normalizedPhone = phone.replace(/^\+/, "");

    console.log("New Lead:");
    console.log({
      fullName,
      phone: normalizedPhone,
      email: email || null,
      createdAt: new Date().toISOString(),
    });

    // ✅ For now just return success
    // (Later we connect email sending here)

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead API error:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}