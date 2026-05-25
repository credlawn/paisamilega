const PB_URL = process.env.NEXT_PUBLIC_POCKETBASE_URL || 'http://127.0.0.1:8090';

export async function getTestimonials() {
  try {
    const res = await fetch(`${PB_URL}/api/collections/pb_testimonials/records?filter=(is_featured=true)`, {
      next: { revalidate: 3600 }, // Refresh every hour (ISR)
    });
    const data = await res.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}

export async function getBlogs() {
  try {
    const res = await fetch(`${PB_URL}/api/collections/pm_blogs/records?filter=(status=true)&sort=-created`, {
      next: { revalidate: 3600 }, // Refresh every hour (ISR)
    });
    const data = await res.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export async function getBlogBySlug(slug: string) {
  try {
    const res = await fetch(`${PB_URL}/api/collections/pm_blogs/records?filter=(slug='${slug}'%26%26status=true)`, {
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    return data.items?.[0] || null;
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    return null;
  }
}

export async function getPartners() {
  try {
    const res = await fetch(`${PB_URL}/api/collections/pm_partners/records?filter=(status=true)`, {
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching partners:", error);
    return [];
  }
}

export function getFileURL(collectionId: string, recordId: string, fileName: string) {
  if (!fileName) return "";
  return `${PB_URL}/api/files/${collectionId}/${recordId}/${fileName}`;
}

export interface FAQItem {
  id: string;
  collectionId: string;
  question_en: string;
  answer_en: string;
  question_hi: string;
  answer_hi: string;
  display_code: number;
  sort_order: number;
  status: boolean;
}

export async function getFAQs(displayCode: number): Promise<FAQItem[]> {
  try {
    const res = await fetch(`${PB_URL}/api/collections/pm_faq/records?filter=(status=true%26%26display_code=${displayCode})&sort=sort_order`, {
      next: { revalidate: 3600 }, // Refresh every hour (ISR)
    });
    const data = await res.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return [];
  }
}

export interface SaathiLead {
  mobile_no: number;
  customer_name?: string;
  city?: string;
  state?: string;
  occupation?: string;
}

export async function createSaathiLead(lead: SaathiLead) {
  try {
    const res = await fetch(`${PB_URL}/api/collections/pm_saathi/records`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mobile_no: lead.mobile_no,
        customer_name: lead.customer_name || "",
        city: lead.city || "",
        state: lead.state || "",
        occupation: lead.occupation || "",
      }),
    });
    if (!res.ok) {
      throw new Error(`Failed to save lead: ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error saving Saathi lead:", error);
    throw error;
  }
}


