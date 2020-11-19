import Link from "next/link";

import Layout from "components/Layout";
import Bio from "components/Bio";
import SEO from "components/Seo";
import { getSortedPosts } from "utils/posts";

import { useTheme } from "next-themes";

export default function Home({ posts }) {
  const { theme, setTheme } = useTheme();
  return (
    <div className="light:bg-light dark:bg-dark">
      <Layout>
        <SEO title="" />
        <Bio className="my-14" />

        <button
          className="mb-10 px-4 py-2 font-semibold rounded-md"
          onClick={() => {
            console.log("Clicked");
            console.log
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          Change Theme
        </button>

        {posts.map(({ frontmatter: { title, description, date }, slug }) => (
          <article key={slug}>
            <header className="mb-2">
              <h3 className="mb-2">
                <Link href={"/post/[slug]"} as={`/post/${slug}`}>
                  <a className="text-4xl font-bold text-blue-600 font-display">
                    {title}
                  </a>
                </Link>
              </h3>
              <span className="text-sm">{date}</span>
            </header>
            <section>
              <p className="mb-8 text-lg">{description}</p>
            </section>
          </article>
        ))}
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
