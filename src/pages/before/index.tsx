import { Route, Routes } from 'react-router-dom';
import { Header } from 'components/header';
import { Activities } from 'pages/before/activities';
import { Logistics } from 'pages/before/logistics';
import { Party } from 'pages/before/party';
import { Story } from 'pages/before/story';
import { Entry } from 'pages/entry';

export const Before = (): JSX.Element => (
  <Routes>
    <Route element={<Header />}>
      <Route element={<Activities />} path="activities" />
      <Route element={<Logistics />} path="logistics" />
      <Route element={<Party />} path="party" />
      <Route element={<Story />} path="story" />
    </Route>
    <Route element={<Entry />} path="*" />
  </Routes>
);
