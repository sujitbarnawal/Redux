import React from "react";
import PostCreator from "./PostCreator";
import Time from "./Time";
import ReactionButtons from "./ReactionButtons";

function PostExcerpt({ post }) {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <PostCreator userId={post.userId} />
      <Time timestamp={post.date} />
      <ReactionButtons post={post} />
      <hr />
    </article>
  );
}

export default PostExcerpt;
