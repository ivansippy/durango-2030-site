export interface NewsArticle {
  title: string;
  link: string;
  source: string;
  pubDate: string;
}

const FEED_URL =
  "https://news.google.com/rss/search?q=%22Durango%22%20%22Mountain%20Bike%20World%20Championships%22&hl=en-US&gl=US&ceid=US:en";

function decodeEntities(str: string): string {
  return str
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .trim();
}

function extractTag(block: string, tag: string): string {
  const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  return match ? decodeEntities(match[1]) : "";
}

export async function getNewsArticles(limit = 10): Promise<NewsArticle[]> {
  try {
    const res = await fetch(FEED_URL, {
      next: { revalidate: 3600 },
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    if (!res.ok) return [];

    const xml = await res.text();
    const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];

    const articles: NewsArticle[] = items.map((block) => {
      const rawTitle = extractTag(block, "title");
      const link = extractTag(block, "link");
      const pubDate = extractTag(block, "pubDate");
      const source = extractTag(block, "source");

      const title =
        source && rawTitle.endsWith(` - ${source}`)
          ? rawTitle.slice(0, -(source.length + 3))
          : rawTitle;

      return { title, link, source, pubDate };
    });

    return articles
      .filter((a) => a.title && a.link && a.pubDate)
      .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
      .slice(0, limit);
  } catch {
    return [];
  }
}
