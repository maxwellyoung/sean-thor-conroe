import { NextResponse } from "next/server";
import Parser from "rss-parser";

const parser = new Parser();
const SUBSTACK_RSS_URL = "https://seanthorconroe.substack.com/feed";

export async function GET() {
  try {
    const feed = await parser.parseURL(SUBSTACK_RSS_URL);

    return NextResponse.json({
      items: feed.items.map((item) => ({
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        description: item.contentSnippet,
      })),
    });
  } catch (error) {
    console.error("Failed to fetch RSS feed:", error);
    return NextResponse.json(
      { error: "Failed to fetch RSS feed" },
      { status: 500 }
    );
  }
}
