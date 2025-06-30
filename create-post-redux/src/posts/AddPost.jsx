import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";
// import { nanoid } from '@reduxjs/toolkit'

function AddPost() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const handleAddPost = (e) => {
    e.preventDefault();
    if (title && content) {
      // dispatch(addPost({ id: nanoid(), title, content }))
      dispatch(addPost(title, content, userId));
      setTitle("");
      setContent("");
      setUserId('')
    } else {
      alert("Please fill in all fields");
    }
  };

  const cansave=Boolean(title)&& Boolean(content) && Boolean(userId)

  return (
    <form onSubmit={handleAddPost}>
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
      <button disabled={!cansave} type="submit">Add Post</button>
    </form>
  );
}

export default AddPost;
