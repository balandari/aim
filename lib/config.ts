// AIMVendors public handoff.
//
// AIM and AIMVendors share one Supabase inventory. AIMVendors is the
// purpose-built public browser for vendor items, so AIM re-points its deep
// item/vendor browsing there while remaining the curated front door.
// AIMVendors exposes a public, unauthenticated vendor-collection view at
// `/?vendor=<vendorId>` (vendorId = vendors.id). No env/secret is involved,
// so the base URL lives here as a plain constant.
export const AIMVENDORS_URL = "https://www.aimvendors.com";

/** Public AIMVendors vendor-collection URL for a given vendor id. */
export function aimvendorsVendorUrl(vendorId: string): string {
  return `${AIMVENDORS_URL}/?vendor=${encodeURIComponent(vendorId)}`;
}
