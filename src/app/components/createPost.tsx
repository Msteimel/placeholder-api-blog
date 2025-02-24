"use client";
import { Post } from "../types/Post";
import { createPost } from "../api/placeholder";

import { useState } from "react";

//TODO: Add error handling and update to be more in line with updatePost.tsx

export default function CreatePost() {
  const [formActive, setFormActive] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("New post");
  const [body, setBody] = useState<string>("New post body");

  const handleTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleBodyInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const handleClick = async () => {
    try {
      const newPost: Post = {
        title: title,
        body: body,
        userId: 1,
        id: 101,
      };
      await createPost(newPost);
      alert("Post successfully created");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      alert(errorMessage);
    }
    setFormActive(false);
  };

  if (formActive) {
    return (
      <form
        onSubmit={handleClick}
        className=" absolute top-0 left-0 flex gap-2 w-full h-full items-center justify-center bg-black bg-opacity-60 z-50">
        <div className="flex flex-col gap-2">
          <h2 className="text-white text-xl">Create new post</h2>
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
            Create Post
          </button>
        </div>
      </form>
    );
  } else {
    return (
      <button onClick={() => setFormActive(true)} className="text-blue-600">
        Create Post
      </button>
    );
  }
}
