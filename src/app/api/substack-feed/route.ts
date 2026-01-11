import { NextResponse } from "next/server";

const SUBSTACK_API_URL =
  "https://seanthorconroe.substack.com/api/v1/archive?sort=new&limit=50";

// Sean's main publication ID
const MAIN_PUBLICATION_ID = 2776341;

interface SubstackPost {
  id: number;
  title: string;
  slug: string;
  subtitle: string;
  post_date: string;
  canonical_url: string;
  type: string;
  audience: string;
  publication_id: number;
  // Restack/crosspost fields
  restacked_pub_name?: string;
  restacked_post_id?: number;
}

export async function GET() {
  try {
    const response = await fetch(SUBSTACK_API_URL, {
      headers: {
        Accept: "application/json",
      },
      next: { revalidate: 300 }, // Cache for 5 minutes
    });

    if (!response.ok) {
      throw new Error(`Substack API returned ${response.status}`);
    }

    const posts: SubstackPost[] = await response.json();

    return NextResponse.json({
      items: posts.map((post) => {
        // Check if this is a restack (crosspost from another publication)
        const isRestack = post.type === "restack" && !!post.restacked_pub_name;

        // Check if published on a different publication (like BLAST 2)
        const isFromOtherPublication =
          post.publication_id !== MAIN_PUBLICATION_ID && !isRestack;

        return {
          title: post.title,
          link: post.canonical_url,
          pubDate: post.post_date,
          description: post.subtitle || "",
          isCrosspost: isRestack || isFromOtherPublication,
          originalSource: post.restacked_pub_name || undefined,
        };
      }),
    });
  } catch (error) {
    console.error("Failed to fetch Substack posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
