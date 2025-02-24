import Link from "next/link";
import { getAllPosts } from "./api/placeholder";

export default async function Page() {
  const posts = await getAllPosts();

  //TODO: set up in Git
  // /TODO: create header with home link and "create post" page.
  // /TODO: create a form to create new post.
  //TODO: do validation on update and create post.
  //TODO: create unit tests for some components. Vitest and React Testing Library;
  //TODO add a readme.md with a high-level overview of the project and how to run it.

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {posts.slice(0, 5).map((post) => (
        <article
          key={post.id}
          className="p-4 border border-solid border-black/[.08] dark:border-white/[.145] rounded">
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {post.body}
          </p>
          <Link
            href={`/posts/${post.id}`}
            className="mt-4 text-sm text-blue-600 dark:text-blue-400">
            Read more
          </Link>
        </article>
      ))}
    </div>
  );
}
