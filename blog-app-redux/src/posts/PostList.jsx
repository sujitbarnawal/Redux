import React from "react";
import { useSelector } from "react-redux";
import {
  getPostsError,
  getPostsStatus,
  selectAllPosts,
} from "./postsSlice";
import PostExcerpt from "./PostExcerpt";

function PostList() {
  //   const posts = useSelector((state) => state.posts)
  const posts = useSelector(selectAllPosts);


  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);


  let content;
  if (postsStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => new Date(b.date) - new Date(a.date));
    content = orderedPosts.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <div>
      <h2>Posts</h2>
      {content}
    </div>
  );
}

export default PostList;
