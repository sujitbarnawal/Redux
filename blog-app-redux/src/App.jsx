import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddPost from "./posts/AddPost";
import PostList from "./posts/PostList";
import Layout from "./components/Layout";
import SinglePostPage from "./posts/SinglePostPage";
import EditPost from "./posts/EditPost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostList />} />
        <Route path="post">
          <Route index element={<AddPost />} />
          <Route path=":id" element={<SinglePostPage />} />
          <Route path=":id/edit" element={<EditPost />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
