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

export function getFileURL(collectionId: string, recordId: string, fileName: string) {
  if (!fileName) return "";
  return `${PB_URL}/api/files/${collectionId}/${recordId}/${fileName}`;
}
