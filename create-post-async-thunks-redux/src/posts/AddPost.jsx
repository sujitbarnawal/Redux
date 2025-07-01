import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";
// import { nanoid } from '@reduxjs/toolkit'

function AddPost() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [userId, setUserId] = useState("");
  const[addRequestStatus,setAddRequestStatus]=useState("idle")

  const users = useSelector(selectAllUsers);

  const cansave=[title,content,userId].every(Boolean)  && addRequestStatus==="idle"

  const handleAddPost = () => {
    if(cansave){
      try {
        setAddRequestStatus("pending")
        dispatch(addNewPost({title,content,userId})).unwrap()
        setTitle("")
        setContent("")
        setUserId("")
      } catch (error) {
        console.error(error);
      } finally{
        setAddRequestStatus("idle")
      }
    }
  };

  

  return (
    <form >
      <label htmlFor="title">Title</label>
      <br />
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Write the title of post"
      />
      <br />
      <br />
      <label htmlFor="user">Creator:</label>
      <select
        onChange={(e) => setUserId(e.target.value)}
        value={userId}
        name="user"
        id="user"
      >
        <option value="">Select a user</option>
        {users.map(user=>(
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
        ))}
      </select>
      <br />
      <br />
      <label htmlFor="content">Content</label>
      <br />
      <textarea
        value={content}
        rows={5}
        cols={70}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write the content of post"
      />
      <br />
      <br />
      <button onClick={handleAddPost} disabled={!cansave} type="submit">Add Post</button>
    </form>
  );
}

export default AddPost;
