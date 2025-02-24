"use client";

import { Post } from "../types/Post";
import { createPost } from "../api/placeholder";
import { useState } from "react";

//TODO: Add error handling and update to be more in line with updatePost.tsx

export default function CreatePost() {
  const [formActive, setFormActive] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("New post");
  const [body, setBody] = useState<string>("New post body");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleBodyInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const newPost: Post = {
        title: title,
        body: body,
        userId: 1,
        id: Math.floor(Math.random() * 1000) + 101,
      };
      await createPost(newPost);
      setFormActive(false);
      alert("Post successfully created");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      alert(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  if (formActive) {
    return (
      <form
        onSubmit={handleSubmit}
        className=" absolute top-0 left-0 flex gap-2 w-full h-full items-center justify-center bg-black bg-opacity-60 z-50">
        <div className="flex flex-col gap-2">
          <h2 className="text-white text-xl">Create new post</h2>

          {error && (
            <p className="text-red-600 bg-red-200 rounded-md p-2">{error}</p>
          )}
          <label htmlFor="title" className="text-white">
            Title
          </label>
          <input
            type="text"
            placeholder={title}
            required
            id="title"
            onChange={handleTitleInput}
            className="border border-solid border-black/[.08] rounded px-2 py-1 text-black"
          />
          <label htmlFor="body" className="text-white">
            Body
          </label>
          <textarea
            placeholder={body}
            required
            id="body"
            onChange={handleBodyInput}
            className="border border-solid border-black/[.08] rounded px-2 py-1 text-black"
          />
          <button className="text-blue-600 bg-white rounded-md mt-4">
            {isLoading ? "Creating..." : `Create Post`}
          </button>
        </div>
      </form>
    );
  } else {
    return (
      <button
        onClick={() => setFormActive(true)}
        disabled={isLoading}
        className="p-4 text-center rounded bg-blue-600 text-black">
        Create Post
      </button>
    );
  }
}
