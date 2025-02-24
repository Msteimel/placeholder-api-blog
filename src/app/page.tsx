"use client";
//using the client directive because of the user ability to show/hide posts

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Post } from "./types/Post";
import { getAllPosts } from "./api/placeholder";

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showAllPosts, setShowAllPosts] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect to fetch all posts on component mount
  useEffect(() => {
    const loadPosts = async () => {
      const data = await getAllPosts();
      setPosts(data);
      setIsLoading(false);
    };
    loadPosts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col  min-h-screen py-2">
      <h2 className="text-2xl pl-4">
        {showAllPosts ? `All Posts` : `Most Recent Posts`}
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {!showAllPosts
          ? posts.slice(0, 6).map((post) => (
              <article
                key={post.id}
                className="p-4 border border-solid border-black/[.08] rounded">
                <h2 className="text-lg font-semibold">{post.title}</h2>
                <p className="mt-2 text-sm text-gray-600 ">{post.body}</p>
                <Link
                  href={`/posts/${post.id}`}
                  className="mt-4 text-sm text-blue-600">
                  Read more
                </Link>
              </article>
            ))
          : posts.map((post) => (
              <article
                key={post.id}
                className="p-4 border border-solid border-black/[.08] rounded">
                <h2 className="text-lg font-semibold">{post.title}</h2>
                <p className="mt-2 text-sm text-gray-600 ">{post.body}</p>
                <Link
                  href={`/posts/${post.id}`}
                  className="mt-4 text-sm text-blue-600">
                  Read more
                </Link>
              </article>
            ))}
      </div>
      <button
        onClick={() => setShowAllPosts(!showAllPosts)}
        className="p-4 text-center rounded bg-blue-600 text-black max-w-[250px] self-center">
        {showAllPosts ? "Hide more" : "Show all"} posts
      </button>
    </div>
  );
}
