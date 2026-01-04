export type Post={
    slug: string,
    title: string,
    excerpt: string,
    content: string
};

export const posts: Post[] = [
    {
        slug: "first-post",
        title: "My First Blog Post",
        excerpt: "This is my first post using Next.js",
        content: "Hello 👋 This is my first blog post built with Next.js and TypeScript."
    },
    {
        slug: "second-post",
        title: "Why I Love Next.js",
        excerpt: "Next.js makes React apps powerful",
        content: "Next.js gives you routing, SEO, and performance out of the box."
    }
];