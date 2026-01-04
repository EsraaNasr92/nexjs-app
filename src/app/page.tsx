import { posts } from "@/lib/posts";
import Link from "next/link";

export default function HomePage() {
  return(
      <section className="mx-auto w-11/12 md:w-3/4 mt-20 flex flex-col gap-16 mb-20">
        <header className="font-cormorantGramond font-light text-6xl text-neutral-900 text-center">
          <h1>Minimal Blog</h1>
        </header>

        <section className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-neutral-900">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-auto text-blue-600 font-medium hover:underline"
              >
                Read more →
              </Link>
            </div>
          ))}
        </section>
      </section>

  )
}
