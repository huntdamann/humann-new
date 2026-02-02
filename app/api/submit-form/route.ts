import { NextResponse } from "next/server"
import { supabase } from "@/src/lib/supabase"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name, email, number, message, budget } = body

    // Basic validation
    if (!name || !email || !number) {
      return NextResponse.json(
        { error: "Name, email, and phone number are required" },
        { status: 400 }
      )
    }

    const { error } = await supabase
      .from("form_submissions")
      .insert([
        {
          name,
          email,
          number,
          message,
          budget, // optional – safe to include even if null
        },
      ])

    if (error) {
      console.error("Supabase insert error:", error)
      return NextResponse.json(
        { error: "Failed to submit form" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err) {
    console.error("API error:", err)
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 500 }
    )
  }
}
