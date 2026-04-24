import { Comment } from "@/types";

type Props = {
  comment: Comment;
};

export default function CommentItem({ comment }: Props) {
  return (
    <div className="flex gap-10 border-b border-yellow-300 px-4 py-10">
      <div className="text-l flex-1">{comment.content}</div>
      <div className="text-sm">
        {comment.createdAt.toDate().toLocaleDateString()}
      </div>
    </div>
  );
}
