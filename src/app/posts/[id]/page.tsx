import { getPostById, getCommentsByPostId } from "@/app/api/placeholder";

import RemoveButton from "@/app/components/removeButton";
import UpdatePost from "@/app/components/updatePost";

export default async function Page({ params }: { params: { id: string } }) {
  const id = (await params).id;

  const postId = Number(id);
  const post = await getPostById(postId);

  const comments = await getCommentsByPostId(id);

  return (
    <article className="p-4 border border-solid border-black/[.08] dark:border-white/[.145] rounded">
      <div className="flex gap-4">
        <h2 className="text-lg font-semibold">{post.title}</h2>
        <div className="flex gap-2">
          <UpdatePost post={post} />
          {post.id && <RemoveButton id={post.id} />}
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        {post.body}
      </p>
      <h3 className="mt-4 text-lg font-semibold">
        Comments ({comments.length})
      </h3>
      <ul className="mt-2 space-y-2">
        {comments.map((comment) => (
          <li className="pb-4" key={comment.id}>
            <h4 className="text-sm font-semibold">{comment.name}</h4>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {comment.body}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
