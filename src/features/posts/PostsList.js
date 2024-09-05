import { useDispatch, useSelector } from "react-redux";
import { selectAllPosts, setDialogFlag, getPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import { Button } from "@mui/material";
import PostDetail from "./PostDetail";
import { useEffect, useState } from "react";
import ReactionButton from "./ReactionButton";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const [selectedPost, setSelectedPost] = useState({});

  useEffect(() => {
    //dispatch(getPosts());
  }, []);

  const handleDetail = (post) => {
    dispatch(setDialogFlag(true));
    setSelectedPost(post);
  };
  const renderedPosts = () => {
    return posts?.map((post) => (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <PostAuthor userId={post.userId}></PostAuthor>
        <Button onClick={() => handleDetail(post)}>View Detail</Button>
        <ReactionButton post={post} />
      </article>
    ));
  };

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts()}
      <PostDetail selectedPost={selectedPost} />
    </section>
  );
};
export default PostsList;
