import { createSlice, nanoid } from "@reduxjs/toolkit";

import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "React Redux",
    content: "Better for large projects",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions:{
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      laugh: 0,
    }
  },
  {
    id: "2",
    title: "Zustand",
    content: "Better for smaller projects",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions:{
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      laugh: 0,
    }
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
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
    addReaction(state,action){
      const {postId, reaction} = action.payload;
      const existingPost = state.find(post=>post.id===postId)
      if(existingPost){
        existingPost.reactions[reaction]++;
      }
    }
  },
});

export const { addPost,addReaction } = postsSlice.actions;
export const selectAllPosts = (state) => state.posts;
export default postsSlice.reducer;
