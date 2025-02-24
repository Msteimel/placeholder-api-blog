"use client";
// using the client directive because of the user ability to click button and update form

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
  const [errorMessage, setErrorMessage] = useState<string>("");

  const updateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;

    setErrorMessage("");

    // Check if title is unchanged
    if (newTitle === post.title) {
      setErrorMessage("Please enter a new title");
    }

    setTitle(newTitle);
  };

  const updateBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newBody = e.target.value;

    setErrorMessage("");

    // Check if body is unchanged
    if (newBody === post.body) {
      setErrorMessage("Please enter updated content");
    }

    setBody(newBody);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check for unchanged content
    if (title === post.title || body === post.body) {
      setErrorMessage("No changes detected. Please modify the title or body.");
      return;
    }

    // Check for any existing error messages
    if (errorMessage) {
      return;
    }

    try {
      const newPost = {
        ...post,
        title: title,
        body: body,
      };

      await updatePost(newPost);
      alert("Post updated successfully");
      setFormActive(false);
    } catch (error) {
      const formErrorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";

      setErrorMessage(formErrorMessage);
    }
  };

  if (formActive) {
    return (
      <form
        onSubmit={handleSubmit}
        className="absolute top-0 left-0 flex gap-2 w-full h-full items-center justify-center bg-black bg-opacity-60 z-50">
        <div className="flex flex-col gap-2">
          <h2 className="text-white text-xl">Update post</h2>

          {/* Error Message Display */}
          {errorMessage && (
            <div className="text-red-500 bg-white p-2 rounded">
              {errorMessage}
            </div>
          )}

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

          <button
            type="submit"
            className="text-blue-600 bg-white rounded-md mt-4"
            disabled={!!errorMessage} // Disable button if there's an error
          >
            Update post
          </button>
        </div>
      </form>
    );
  } else {
    return (
      <button onClick={() => setFormActive(true)} className="text-blue-600">
        Update Post
      </button>
    );
  }
}
