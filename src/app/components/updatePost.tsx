"use client";
import { Post } from "../types/Post";
import { updatePost } from "../api/placeholder";

import { useState } from "react";

interface Props {
  post: Post;
}

export default function UpdatePost({ post }: Props) {
  const [formActive, setFormActive] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(post.title);
  const [body, setBody] = useState<string>(post.body);

  const updateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const updateBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const handleClick = async () => {
    const newPost = {
      ...post,
      title: title,
      body: body,
    };
    await updatePost(newPost);

    alert("Post updated successfully");

    setFormActive(false);
  };

  if (formActive) {
    return (
      <form
        onSubmit={handleClick}
        className=" absolute top-0 left-0 flex gap-2 w-full h-full items-center justify-center bg-black bg-opacity-60 z-50">
        <div className="flex flex-col gap-2">
          <h2 className="text-white text-xl">Update post</h2>
          <label htmlFor="title" className="text-white">
            Title
          </label>
          <input
            type="text"
            value={title}
            id="title"
            onChange={updateTitle}
            className="border border-solid border-black/[.08] dark:border-white/[.145] rounded px-2 py-1 text-black"
          />
          <label htmlFor="body" className="text-white">
            Body
          </label>
          <textarea
            value={body}
            id="body"
            onChange={updateBody}
            className="border border-solid border-black/[.08] dark:border-white/[.145] rounded px-2 py-1 text-black"
          />
          <button className="text-blue-600 bg-white rounded-md mt-4">
            Update post
          </button>
        </div>
      </form>
    );
  } else {
    return (
      <button onClick={() => setFormActive(true)} className="text-blue-600">
        Update
      </button>
    );
  }
}
