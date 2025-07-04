import React from 'react'
import { useSelector } from 'react-redux'
import { selectPostById } from './postsSlice'
import PostCreator from './PostCreator'
import Time from './Time'
import ReactionButtons from './ReactionButtons'
import { useNavigate, useParams } from 'react-router-dom'

function SinglePostPage() {
    const {id} = useParams()
    const navigate = useNavigate()
    const post=useSelector((state =>selectPostById(state, Number(id))))
    if(!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }
  return (
    <article>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <p>
            <PostCreator userId={post.userId} />
            <Time/>
        </p>
        <ReactionButtons post={post} />
        <button onClick={()=>navigate('/post/'+post.id+'/edit') } style={{marginTop:"4px"}}>Edit Post</button>
    </article>
  )
}

export default SinglePostPage
