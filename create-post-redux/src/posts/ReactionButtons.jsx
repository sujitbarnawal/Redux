import React from "react";
import { useDispatch } from "react-redux";
import { addReaction } from "./postsSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😲",
  heart: "❤️",
  laugh: "😂",
};

function ReactionButtons({ post }) {
  const dispatch = useDispatch();

  return (
    <div>
      {Object.entries(reactionEmoji).map(([name, emoji]) => (
        <span
          key={name}
          onClick={() =>
            dispatch(addReaction({ postId: post.id, reaction: name }))
          }
          style={{ marginRight: "8px", cursor: "pointer" }}
        >
          {emoji} {post.reactions?.[name] ?? 0}
        </span>
      ))}
    </div>
  );
}

export default ReactionButtons;
