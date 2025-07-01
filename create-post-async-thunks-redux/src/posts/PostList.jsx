import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPosts,
  getPostsError,
  getPostsStatus,
  selectAllPosts,
} from "./postsSlice";
import PostExcerpt from "./PostExcerpt";

function PostList() {
  //   const posts = useSelector((state) => state.posts)
  const posts = useSelector(selectAllPosts);

  const dispatch = useDispatch();

  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

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
