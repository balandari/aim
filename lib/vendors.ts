import { createPublicClient } from "./supabase";
import type { Vendor, VendorWithCount, Item, ItemWithVendor } from "./types";

export async function getVendors(): Promise<VendorWithCount[]> {
  const supabase = createPublicClient();

  // Get all vendors
  const { data: vendors, error: vendorsError } = await supabase
    .from("vendors")
    .select("id, display_name, booth_number");

  if (vendorsError || !vendors) {
    console.error("Error fetching vendors:", vendorsError);
    return [];
  }

  // Get item counts per vendor (unsold only)
  const { data: items, error: itemsError } = await supabase
    .from("items")
    .select("id, vendor_id, item_photos(photo_url, is_primary, display_order)")
    .eq("is_sold", false);

  if (itemsError) {
    console.error("Error fetching items:", itemsError);
    return [];
  }

  // Build vendor list with counts and preview photos
  const vendorMap = new Map<
    string,
    { count: number; previewPhoto: string | null }
  >();

  for (const item of items || []) {
    const existing = vendorMap.get(item.vendor_id) || {
      count: 0,
      previewPhoto: null,
    };
    existing.count++;

    // Use the first primary photo we find as preview
    if (!existing.previewPhoto && item.item_photos?.length > 0) {
      const primary = item.item_photos.find(
        (p: { is_primary: boolean }) => p.is_primary
      );
      existing.previewPhoto = primary
        ? primary.photo_url
        : item.item_photos[0].photo_url;
    }

    vendorMap.set(item.vendor_id, existing);
  }

  // Only include vendors with at least 1 unsold item
  const result: VendorWithCount[] = vendors
    .filter((v) => {
      const info = vendorMap.get(v.id);
      return info && info.count > 0;
    })
    .map((v) => ({
      ...v,
      item_count: vendorMap.get(v.id)!.count,
      preview_photo: vendorMap.get(v.id)!.previewPhoto,
    }))
    .sort((a, b) => b.item_count - a.item_count);

  return result;
}

export async function getVendor(id: string): Promise<Vendor | null> {
  const supabase = createPublicClient();

  const { data, error } = await supabase
    .from("vendors")
    .select("id, display_name, booth_number, allow_inquiries")
    .eq("id", id)
    .single();

  if (error || !data) {
    console.error("Error fetching vendor:", error);
    return null;
  }

  return data;
}

export async function getVendorItems(vendorId: string): Promise<Item[]> {
  const supabase = createPublicClient();

  const { data, error } = await supabase
    .from("items")
    .select(
      "id, title, description, price, photo_url, is_sold, created_at, item_photos(id, photo_url, is_primary, display_order)"
    )
    .eq("vendor_id", vendorId)
    .eq("is_sold", false)
    .order("created_at", { ascending: false });

  if (error || !data) {
    console.error("Error fetching vendor items:", error);
    return [];
  }

  return data as Item[];
}

export async function getItem(id: string): Promise<ItemWithVendor | null> {
  const supabase = createPublicClient();

  const { data, error } = await supabase
    .from("items")
    .select(
      "id, vendor_id, title, description, price, photo_url, is_sold, created_at, vendors(id, display_name, booth_number, allow_inquiries), item_photos(id, photo_url, is_primary, display_order)"
    )
    .eq("id", id)
    .single();

  if (error || !data) {
    console.error("Error fetching item:", error);
    return null;
  }

  return data as unknown as ItemWithVendor;
}

export async function submitInquiry(data: {
  itemId: string;
  name: string;
  contactMethod: "email" | "phone";
  contactValue: string;
  message: string;
  notifyOptIn?: boolean;
}): Promise<{ success: boolean; error?: string }> {
  const supabase = createPublicClient();

  // Look up the item to get vendor_id
  const { data: item, error: itemError } = await supabase
    .from("items")
    .select("vendor_id")
    .eq("id", data.itemId)
    .single();

  if (itemError || !item) {
    return { success: false, error: "Item not found" };
  }

  // Insert inquiry
  const { error: insertError } = await supabase
    .from("item_inquiries")
    .insert({
      item_id: data.itemId,
      vendor_id: item.vendor_id,
      name: data.name,
      contact_method: data.contactMethod,
      contact_value: data.contactValue,
      message: data.message,
      notify_opt_in: data.notifyOptIn ?? false,
    });

  if (insertError) {
    console.error("Error submitting inquiry:", insertError);
    return { success: false, error: "Failed to submit inquiry" };
  }

  return { success: true };
}
