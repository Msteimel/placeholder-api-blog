"use client";
//using the client directive because of the user ability to click button

import { deletePost } from "../api/placeholder";

interface Props {
  id: number | string;
}

export default function RemoveButton({ id }: Props) {
  const handleClick = async () => {
    alert("Are you sure you want to delete this post?");
    await deletePost(id);
    window.location.href = "/";
    alert("Post deleted successfully");
  };

  return (
    <button onClick={handleClick} className="text-red-600">
      Remove Post
    </button>
  );
}
