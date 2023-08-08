import { Route, Routes } from 'react-router-dom';
import { Header } from 'components/header';
import { Photos } from 'pages/after/photos';
import { Thanks } from 'pages/after/thanks';
import { Vendors } from 'pages/after/vendors';
import { Entry } from 'pages/entry';

export const After = (): JSX.Element => (
  <Routes>
    <Route element={<Header />}>
      <Route element={<Photos />} path="photos" />
      <Route element={<Thanks />} path="thanks" />
      <Route element={<Vendors />} path="vendors" />
    </Route>
    <Route element={<Entry />} path="*" />
  </Routes>
);
