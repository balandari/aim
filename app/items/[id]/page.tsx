import { notFound, permanentRedirect } from "next/navigation";
import { getItem } from "@/lib/vendors";
import { aimvendorsVendorUrl } from "@/lib/config";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Legacy AIM per-item pages now permanently hand off (HTTP 308) to the
// AIMVendors public vendor collection. AIM and AIMVendors share one Supabase
// inventory; AIMVendors owns item browsing while AIM stays the curated front
// door. Unknown items still 404 so bad/removed ids don't redirect anywhere.
export default async function ItemDetailPage({ params }: PageProps) {
  const { id } = await params;
  const item = await getItem(id);

  if (!item) {
    notFound();
  }

  permanentRedirect(aimvendorsVendorUrl(item.vendor_id));
}
