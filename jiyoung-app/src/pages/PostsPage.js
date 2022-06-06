import axios from "axios";
import { useCallback } from "react";
import PostList from "@components/domain/PostList";
import PostProvider from "@contexts/PostProvider";
import { useAsync } from "@hooks";
import { Header } from "@components";
import PostAddForm from "@components/domain/PostAddForm";

const PostsPage = () => {
  const initialPosts = useAsync(async () => {
    return await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.data);
  }, []);

  const handleAddPost = useCallback(async (post) => {
    console.log(post);
    return await axios
      .post(`https://jsonplaceholder.typicode.com/posts`, post)
      .then((response) => response.data);
  }, []);

  const handleDeletePost = useCallback(async (id) => {
    return await axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => ({ id }));
  }, []);

  return (
    <PostProvider
      initialPosts={initialPosts.value}
      handleAddPost={handleAddPost}
      handleDeletePost={handleDeletePost}
    >
      <Header>Posts</Header>
      <PostAddForm />
      <PostList />
    </PostProvider>
  );
};

export default PostsPage;
