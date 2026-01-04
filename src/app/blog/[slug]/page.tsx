import { posts } from "@/lib/posts";
import { notFound } from "next/navigation";

type Props = {
    params: { slug: string };
};

export default async function BlogPostPage({ params }: Props) {
  // If params is a promise, await it
    const { slug } = await params;

    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return notFound();
    }

    return (
        <main className="mx-auto w-11/12 md:w-3/4 mt-20">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700">{post.content}</p>
        </main>
    );
}
