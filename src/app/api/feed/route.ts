import { NextResponse } from "next/server";
import Parser from "rss-parser";

const parser = new Parser();
const SUBSTACK_FEED_URL = "https://seanthorconroe.substack.com/feed";
const SITE_URL = "https://seanthorconroe.com";

export async function GET() {
  try {
    const feed = await parser.parseURL(SUBSTACK_FEED_URL);

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>sean thor conroe</title>
    <description>writing updates, essays, and thoughts from sean thor conroe</description>
    <link>${SITE_URL}</link>
    <atom:link href="${SITE_URL}/api/feed" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>sean thor conroe website</generator>
    <image>
      <url>${SITE_URL}/images/fuccboi-cover-1.webp</url>
      <title>sean thor conroe</title>
      <link>${SITE_URL}</link>
    </image>
    ${feed.items
      .slice(0, 20)
      .map(
        (item) => `
    <item>
      <title><![CDATA[${item.title || ""}]]></title>
      <link>${item.link || ""}</link>
      <guid isPermaLink="true">${item.link || ""}</guid>
      <pubDate>${item.pubDate ? new Date(item.pubDate).toUTCString() : ""}</pubDate>
      <description><![CDATA[${item.contentSnippet || item.content || ""}]]></description>
      ${item.content ? `<content:encoded><![CDATA[${item.content}]]></content:encoded>` : ""}
      <author>sean thor conroe</author>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

    return new NextResponse(rss, {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (error) {
    console.error("RSS feed error:", error);
    return NextResponse.json(
      { error: "Failed to generate feed" },
      { status: 500 }
    );
  }
}
