import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export async function POST(req: Request) {
  try {
    const formData = await req.json();

    const res = await fetch(`${API_URL}/api/supports`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: formData }),
    });

    if (!res.ok) {
      const error = await res.json();
      return NextResponse.json(
        { error: error.error?.message || "Failed to submit form" },
        { status: 400 }
      );
    }

    const data = await res.json();
    return NextResponse.json({ message: "Form submitted successfully!", data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
