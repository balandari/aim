// AIMVendors public handoff.
//
// AIM and AIMVendors share one Supabase inventory. AIMVendors is the
// purpose-built public browser for vendor items, so AIM re-points its deep
// item/vendor browsing there while remaining the curated front door.
// AIMVendors exposes public, unauthenticated views for both an exact item
// (`/items/<itemId>`, itemId = items.id) and a vendor collection
// (`/?vendor=<vendorId>`, vendorId = vendors.id). No env/secret is involved,
// so the base URL lives here as a plain constant.
export const AIMVENDORS_URL = "https://www.aimvendors.com";

/** Public AIMVendors exact-item URL for a given item id. */
export function aimvendorsItemUrl(itemId: string): string {
  return `${AIMVENDORS_URL}/items/${encodeURIComponent(itemId)}`;
}

/** Public AIMVendors vendor-collection URL for a given vendor id. */
export function aimvendorsVendorUrl(vendorId: string): string {
  return `${AIMVENDORS_URL}/?vendor=${encodeURIComponent(vendorId)}`;
}
