import { Post } from "../types/Post";
import { Comment } from "../types/Comment";

const BASE_URL = "https://jsonplaceholder.typicode.com";

//!! Add try catch block to handle errors

export async function getAllPosts(): Promise<Post[]> {
  const res = await fetch(`${BASE_URL}/posts`);
  return res.json();
}

export async function getCommentsByPostId(id: number): Promise<Comment[]> {
  const res = await fetch(`${BASE_URL}/posts/${id}/comments`);
  return res.json();
}

export async function getPostById(id: number): Promise<Post> {
  const res = await fetch(`${BASE_URL}/posts/${id}`);
  return res.json();
}

export async function createPost(post: Post): Promise<Post> {
  const res = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    body: JSON.stringify({
      title: post.title,
      body: post.body,
      userId: post.userId,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return res.json();
}

export async function deletePost(id: number): Promise<void> {
  await fetch(`${BASE_URL}/posts/${id}`, {
    method: "DELETE",
  });
}

export async function updatePost(post: Post): Promise<Post> {
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

  return res.json();
}
