import React from "react";
import PostCreator from "./PostCreator";
import Time from "./Time";
import ReactionButtons from "./ReactionButtons";
import { useNavigate } from "react-router-dom";

function PostExcerpt({ post }) {
  const navigate = useNavigate();
  return (
    <article
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
        marginBottom: "1rem",
        maxWidth: "600px",
      }}
    >
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <PostCreator userId={post.userId} />
      <Time timestamp={post.date} />
      <ReactionButtons post={post} />
      <button style={{marginTop:"4px",cursor: "pointer",}} onClick={() => navigate("/post/" + post.id)}>View Post</button>
    </article>
  );
}

export default PostExcerpt;
