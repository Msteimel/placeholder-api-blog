import { Post } from "../types/Post";
import { Comment } from "../types/Comment";

const BASE_URL = "https://jsonplaceholder.typicode.com";

//TODO: I would add a try catch to all of these functions for error handling

// Get all posts
export async function getAllPosts(): Promise<Post[]> {
  const res = await fetch(`${BASE_URL}/posts`);
  return res.json();
}

// Get all comments for a post by id
export async function getCommentsByPostId(
  id: number | string,
): Promise<Comment[]> {
  const res = await fetch(`${BASE_URL}/posts/${id}/comments`);
  return res.json();
}

// Get a specific post by id
export async function getPostById(id: number | string): Promise<Post> {
  const res = await fetch(`${BASE_URL}/posts/${id}`);
  return res.json();
}

// Create a new post
export async function createPost(post: Post): Promise<Post> {
  try {
    const res = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      body: JSON.stringify({
        title: post.title,
        body: post.body,
        userId: post.userId,
        id: post.id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    throw new Error(`Failed to create post: ${errorMessage}`);
  }
}

// Delete a post by id
export async function deletePost(id: number | string): Promise<void> {
  await fetch(`${BASE_URL}/posts/${id}`, {
    method: "DELETE",
  });
}

// Update a post
export async function updatePost(post: Post): Promise<Post> {
  try {
    const res = await fetch(`${BASE_URL}/posts/${post.id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: post.title,
        body: post.body,
        userId: post.userId,
        id: post.id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    throw new Error(`Failed to update post: ${errorMessage}`);
  }
}
