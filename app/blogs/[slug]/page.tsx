import BlogDetailPage from "@/components/pages/BlogDetailPage";
import { getBlogs, getBlogBySlug, getFileURL } from "@/utils/pocketbase";
import type { Metadata } from "next";

interface BlogItem {
  slug: string;
}

type Props = {
  params: Promise<{ slug: string }>;
};

// 1. Generate static paths for blogs during build (SSG)
export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog: BlogItem) => ({
    slug: blog.slug,
  }));
}

// 2. Dynamically generate metadata for search engines & social previews (SEO)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Article Not Found | Paisa Milega",
    };
  }

  const title = blog.title_en || blog.title;
  const description = blog.excerpt_en || blog.excerpt || "Read our latest financial insight article on Paisa Milega.";
  const imageUrl = blog.image ? getFileURL(blog.collectionId, blog.id, blog.image) : "";

  return {
    title: `${blog.seo_title || title} | Paisa Milega Blog`,
    description: description,
    keywords: blog.seo_keyword || "financial tips, earning apps, credit card guide, side income",
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
