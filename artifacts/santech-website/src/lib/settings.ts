import settingsJson from "../content/settings.json";

export interface Phone {
  label: string;
  display: string;
  link: string;
}
export interface Email {
  label: string;
  address: string;
}
export interface SiteSettings {
  brand: {
    logo: string;
    logo_alt: string;
  };
  contact: {
    phones: Phone[];
    emails: Email[];
    gm_email: string;
    whatsapp_number: string;
    maps_share_url: string;
    maps_embed_url: string;
  };
  images: {
    hero_background: string;
    about_background: string;
    showroom_storefront: string;
    og_image: string;
  };
}

export const settings: SiteSettings = settingsJson as SiteSettings;
