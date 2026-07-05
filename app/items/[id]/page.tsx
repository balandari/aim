import { notFound, permanentRedirect } from "next/navigation";
import { getItem } from "@/lib/vendors";
import { aimvendorsItemUrl } from "@/lib/config";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Legacy AIM per-item pages now permanently hand off (HTTP 308) to the exact
// AIMVendors item page at the same id. AIM and AIMVendors share one Supabase
// inventory; AIMVendors owns item browsing while AIM stays the curated front
// door. We still resolve the item first so unknown/removed ids 404 instead of
// redirecting to a dead AIMVendors item page.
export default async function ItemDetailPage({ params }: PageProps) {
  const { id } = await params;
  const item = await getItem(id);

  if (!item) {
    notFound();
  }

  permanentRedirect(aimvendorsItemUrl(id));
}
