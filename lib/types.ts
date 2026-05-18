export interface Vendor {
  id: string;
  display_name: string;
  booth_number: string | null;
  allow_inquiries?: boolean;
}

export interface VendorWithCount extends Vendor {
  item_count: number;
  preview_photo: string | null;
}

export interface ItemPhoto {
  id: string;
  photo_url: string;
  is_primary: boolean;
  display_order: number;
}

export interface Item {
  id: string;
  vendor_id: string;
  title: string | null;
  description: string | null;
  price: string | null;
  photo_url: string | null;
  is_sold: boolean;
  created_at: string;
  item_photos: ItemPhoto[];
}

export interface ItemWithVendor extends Item {
  vendors: Vendor;
}

export interface GalleryPhoto {
  item_id: string;
  item_title: string | null;
  price: string | null;
  photo_url: string;
  created_at: string;
  vendor_id: string;
  vendor_name: string;
}

export interface InquirySubmission {
  itemId: string;
  name: string;
  contactMethod: "email" | "phone";
  contactValue: string;
  message: string;
  notifyOptIn?: boolean;
}
