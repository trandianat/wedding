import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Post } from 'components/Post';
import { Pre } from 'components/Pre';

export const App = () => (
  <BrowserRouter>
    <Link to="/">Home</Link>
    <Link to="/pre">Pre</Link>
    <Link to="/post">Post</Link>
    <Routes>
      <Route element={<p>Home</p>} path="/" />
      <Route element={<Pre />} path="/pre" />
      <Route element={<Post />} path="/post" />
    </Routes>
  </BrowserRouter>
);
