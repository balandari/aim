import { NextRequest, NextResponse } from "next/server";
import { createPublicClient } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { itemId, name, contactMethod, contactValue, message, notifyOptIn } =
      body;

    // Validate required fields
    if (!itemId || !name?.trim() || !contactMethod || !contactValue?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate contact method
    if (contactMethod !== "email" && contactMethod !== "phone") {
      return NextResponse.json(
        { error: "Contact method must be 'email' or 'phone'" },
        { status: 400 }
      );
    }

    // Validate email format
    if (
      contactMethod === "email" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactValue)
    ) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const supabase = createPublicClient();

    // Look up item to get vendor_id
    const { data: item, error: itemError } = await supabase
      .from("items")
      .select("vendor_id")
      .eq("id", itemId)
      .single();

    if (itemError || !item) {
      return NextResponse.json(
        { error: "Item not found" },
        { status: 404 }
      );
    }

    // Insert inquiry
    const { error: insertError } = await supabase
      .from("item_inquiries")
      .insert({
        item_id: itemId,
        vendor_id: item.vendor_id,
        name: name.trim(),
        contact_method: contactMethod,
        contact_value: contactValue.trim(),
        message: message.trim(),
        notify_opt_in: notifyOptIn ?? false,
      });

    if (insertError) {
      console.error("Error inserting inquiry:", insertError);
      return NextResponse.json(
        { error: "Failed to submit inquiry" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
