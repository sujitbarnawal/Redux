import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'
import PostCreator from './PostCreator'
import Time from './Time'
import Reactions from './ReactionButtons'
import ReactionButtons from './ReactionButtons'

function PostList() {
//   const posts = useSelector((state) => state.posts)
  const posts = useSelector(selectAllPosts)
  .slice() 
  .sort((a, b) => new Date(b.date) - new Date(a.date)) 


  return (
    <div>
      <h2>Posts</h2>
      <hr />
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <PostCreator userId={post.userId} />
            <Time timestamp={post.date}/>
            <ReactionButtons post={post}/>
            <hr />
          </article>
        ))
      )}
    </div>
  )
}

export default PostList
