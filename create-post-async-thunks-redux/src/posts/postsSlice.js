/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

import { sub } from "date-fns";
import { act } from "react";

const POSTS_URL="https://jsonplaceholder.typicode.com/posts"

const initialState = {
  posts: [],
  status: "idle",  // "idle" | "loading" | "succeeded" | "failed"
  error: null,
};

export const fetchPosts=createAsyncThunk('posts/fetchPosts',async()=>{
  try {
    const response=await axios.get(POSTS_URL)
    return [...response.data]
  } catch (error) {
    return error.message
  }
})

export const addNewPost=createAsyncThunk('posts/addNewPost',async(initialPost)=>{
  try {
    const response=await axios.post(POSTS_URL,initialPost)
    return response.data
  } catch (error) {
    return error.message
  }
})

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
          },
        };
      },
    },
    addReaction(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
  extraReducers(builder){
    builder
    .addCase(fetchPosts.pending,(state,action)=>{
      state.status="loading"
    })
    .addCase(fetchPosts.fulfilled,(state,action)=>{
      state.status="succeeded"
      //adding date and reactions
      let min=1
      const loadPosts=action.payload.map(post=>{
        post.date=sub(new Date() ,{minutes:min++}).toISOString()
        post.reactions={
          thumbsUp:0,
          wow:0,
          heart:0,
          laugh:0
        }
        return post
      })
      //add any fetched post
      state.posts=state.posts.concat(loadPosts)
    })
    .addCase(fetchPosts.rejected,(state,action)=>{
      state.status="failed"
      state.error=action.error.message
    })
    .addCase(addNewPost.fulfilled,(state,action)=>{
       action.payload.userId=Number(action.payload.userId)
       action.payload.date=new Date().toISOString()
       action.payload.reactions={
        thumbsUp:0,
        wow:0,
        heart:0,
        laugh:0
       }
       console.log(action.payload);
       state.posts.push(action.payload)
    })
  }
});

export const { addPost, addReaction } = postsSlice.actions;
export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;
export default postsSlice.reducer;
