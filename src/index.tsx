import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from 'components/App';
import { Post } from 'components/Post';
import { Pre } from 'components/Pre';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />} path="/">
        <Route element={<Pre />} path="/pre/*" />
        <Route element={<Post />} path="/post/*" />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
