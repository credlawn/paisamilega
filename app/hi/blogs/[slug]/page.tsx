import BlogDetailPage from "@/components/pages/BlogDetailPage";
import { getBlogs, getBlogBySlug, getFileURL } from "@/utils/pocketbase";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

// 1. Generate static paths for Hindi blogs during build (SSG)
export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog: any) => ({
    slug: blog.slug,
  }));
}

// 2. Dynamically generate metadata for search engines & social previews (SEO)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "लेख नहीं मिला | Paisa Milega",
    };
  }

  const title = blog.title_hi || blog.title;
  const description = blog.excerpt_hi || blog.excerpt || "Paisa Milega पर वित्तीय जानकारी और ऑनलाइन कमाई के टिप्स पढ़ें।";
  const imageUrl = blog.image ? getFileURL(blog.collectionId, blog.id, blog.image) : "";

  return {
    title: `${title} | Paisa Milega ब्लॉग`,
    description: description,
    keywords: blog.seo_keyword || "paise kamane ke tips, side income ideas, credit card rules, loan details",
    openGraph: {
      title: title,
      description: description,
      images: imageUrl ? [{ url: imageUrl }] : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default function Page() {
  return <BlogDetailPage />;
}
