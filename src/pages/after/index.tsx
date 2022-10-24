import { Header } from 'components/header';
import { Route, Routes } from 'react-router-dom';
import { Photos } from 'pages/after/photos';
import { Thanks } from 'pages/after/thanks';

export const After = (): JSX.Element => (
  <Routes>
    <Route element={<Header />} path="/">
      <Route element={<Photos />} path="photos" />
      <Route element={<Thanks />} path="thanks" />
    </Route>
  </Routes>
);
