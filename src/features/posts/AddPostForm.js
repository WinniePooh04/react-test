import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, MenuItem, Select } from "@mui/material";
import { postAdded } from "./postsSlice";
import { useState } from "react";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = ({ post }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  const onUserChange = (e) => {
    setUserId(e.target.value);
  };

  const userOptions = users.map((user) => (
    <MenuItem key={user.id} value={user.id}>
      {user.name}
    </MenuItem>
  ));
  const savePost = () => {
    console.log("userId", userId);
    if (title && content) {
      dispatch(postAdded({ title, content, userId }));
      setTitle("");
      setContent("");
      setUserId("");
    }
  };
  return (
    <>
      <h2>Add a New Post</h2>
      <TextField
        id="postTitle"
        label="Post Title"
        value={title}
        onChange={onTitleChange}
      ></TextField>
      <TextField
        id="postContent"
        label="Post Content"
        value={content}
        onChange={onContentChange}
      ></TextField>
      <Select value={userId} onChange={onUserChange}>
        <MenuItem value=""></MenuItem>
        {userOptions}
      </Select>
      <Button variant="contained" onClick={savePost}>
        Save Post
      </Button>
    </>
  );
};
export default AddPostForm;
