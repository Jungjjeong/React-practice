import { Routes, Route } from "react-router";
import { PostsPage, PostPage, NotFoundPage } from "@pages";
import DefaultTemplate from "@components/template/DefaultTemplate";

const App = () => {
  return (
    <DefaultTemplate>
      <Routes>
        <Route path="/" exact element={<h1>Home</h1>} />
        <Route path="/posts" exact element={<PostsPage />} />
        <Route path="/posts/:postId" element={<PostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </DefaultTemplate>
  );
};

export default App;
