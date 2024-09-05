import { createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const allPosts = [
  {
    id: "1",
    title: "Learning Redux Tool",
    content: "I've heard good thing",
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "Slices.....",
    content: "The more I say slice, the more",
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const initialState = {
  posts: allPosts,
  openDialog: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare({ title, content, userId }) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    setDialogFlag: {
      reducer(state, action) {
        state.openDialog = action.payload;
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const exitPost = state.posts.find((post) => post.id === postId);
      if (exitPost) {
        exitPost.reactions[reaction]++;
      }
    },
    fetchPostList(state, action) {
      state.posts = action.payload;
    },
  },
});

export const selectAllPosts = (state) => state.posts.posts;
export const dialogFlag = (state) => state.posts.openDialog;

export const { postAdded, setDialogFlag, reactionAdded, fetchPostList } =
  postsSlice.actions;

export const getPosts = () => async (dispatch) => {
  const response = await axios.request("http://localhost:8000/posts");
  console.log("response", response.data);
  dispatch({ type: fetchPostList.type, payload: response.data });
};

export default postsSlice.reducer;
