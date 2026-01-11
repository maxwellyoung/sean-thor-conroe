import { NextResponse } from "next/server";

// 1storypod YouTube channel
const YOUTUBE_RSS_URL = "https://www.youtube.com/feeds/videos.xml?channel_id=UCwYTr8LrwmVMZBkqoKnuXrQ";

export async function GET() {
  try {
    const response = await fetch(YOUTUBE_RSS_URL, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error("Failed to fetch YouTube feed");
    }

    const xml = await response.text();

    // Parse the XML feed
    const episodes = parseYouTubeFeed(xml);

    return NextResponse.json({ episodes });
  } catch (error) {
    console.error("YouTube feed error:", error);
    return NextResponse.json(
      { error: "Failed to fetch episodes", episodes: [] },
      { status: 500 }
    );
  }
}

function parseYouTubeFeed(xml: string) {
  const episodes: Array<{
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    publishedAt: string;
    videoId: string;
  }> = [];

  // Extract entries using regex (simple parsing without dependencies)
  const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
  const titleRegex = /<title>([\s\S]*?)<\/title>/;
  const videoIdRegex = /<yt:videoId>([\s\S]*?)<\/yt:videoId>/;
  const publishedRegex = /<published>([\s\S]*?)<\/published>/;
  const descriptionRegex = /<media:description>([\s\S]*?)<\/media:description>/;

  let match;
  let count = 0;

  while ((match = entryRegex.exec(xml)) !== null && count < 10) {
    const entry = match[1];

    const titleMatch = titleRegex.exec(entry);
    const videoIdMatch = videoIdRegex.exec(entry);
    const publishedMatch = publishedRegex.exec(entry);
    const descriptionMatch = descriptionRegex.exec(entry);

    if (titleMatch && videoIdMatch) {
      const videoId = videoIdMatch[1].trim();
      episodes.push({
        id: videoId,
        videoId: videoId,
        title: decodeHTMLEntities(titleMatch[1].trim()),
        description: descriptionMatch
          ? decodeHTMLEntities(descriptionMatch[1].trim()).slice(0, 200)
          : "",
        thumbnail: `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`,
        publishedAt: publishedMatch ? publishedMatch[1].trim() : "",
      });
      count++;
    }
  }

  return episodes;
}

function decodeHTMLEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}
