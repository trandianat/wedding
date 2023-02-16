import { Fragment } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Header } from 'components/header';
import { Photos } from 'pages/after/photos';
import { Thanks } from 'pages/after/thanks';
import { Vendors } from 'pages/after/vendors';

export const After = (): JSX.Element => (
  <Fragment>
    <Routes>
      <Route element={<Header />} path="/">
        <Route element={<Photos />} path="photos" />
        <Route element={<Thanks />} path="thanks" />
        <Route element={<Vendors />} path="vendors" />
      </Route>
    </Routes>
    <Outlet />
  </Fragment>
);
