import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type LeadPayload = {
  fullName: string;
  phone: string;
  email?: string;
};

function normalizePhone(input: string) {
  // Accept: "745..." or "+255745..." or "255745..."
  const raw = String(input || "")
    .trim()
    .replace(/\s+/g, "")
    .replace(/^\+/, "");

  if (!raw) return "";

  if (raw.startsWith("255")) return raw;
  if (/^\d{9}$/.test(raw)) return `255${raw}`; // TZ local 9 digits
  return raw;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => null)) as LeadPayload | null;

    const fullName = String(body?.fullName || "").trim();
    const phone = normalizePhone(body?.phone || "");
    const email = String(body?.email || "").trim();

    if (!fullName || !phone) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const SMTP_HOST = process.env.SMTP_HOST || "mail.smartmotorz.co.tz";
    const SMTP_PORT = Number(process.env.SMTP_PORT || "465");
    const SMTP_USER = process.env.SMTP_USER || "info@smartmotorz.co.tz";
    const SMTP_PASS = process.env.SMTP_PASS;

    if (!SMTP_PASS) {
      return NextResponse.json(
        { ok: false, error: "Server email not configured (missing SMTP_PASS)" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465, // true for 465
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const to = process.env.LEAD_TO_EMAIL || "info@smartmotorz.co.tz";
    const from = process.env.LEAD_FROM_EMAIL || SMTP_USER;

    const subject = `New Lead — ${fullName}`;
    const text = [
      "New lead submitted on Smart Motorz website:",
      "",
      `Full Name: ${fullName}`,
      `Phone: +${phone}`,
      `Email: ${email || "-"}`,
      `Time: ${new Date().toISOString()}`,
    ].join("\n");

    await transporter.sendMail({
      from,
      to,
      subject,
      text,
      replyTo: email || undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Lead API error:", e);
    return NextResponse.json(
      { ok: false, error: "Email send failed" },
      { status: 500 }
    );
  }
}