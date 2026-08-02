import { grotesk } from "../fonts";
import { getNewsArticles } from "../lib/news";
import NewsCarousel from "./news-carousel";

export default async function NewsSection() {
  const articles = await getNewsArticles(10);

  if (articles.length === 0) return null;

  return (
    <section className="pb-24">
      <h2
        className={`${grotesk.className} text-2xl sm:text-3xl font-semibold text-white mb-6 text-center`}
      >
        In the News
      </h2>
      <NewsCarousel articles={articles} />
    </section>
  );
}
