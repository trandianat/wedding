import { Route, Routes } from 'react-router-dom';
import { Logistics } from 'pages/before/logistics';
import { Main } from 'pages/before/main';
import { Party } from 'pages/before/party';
import { RSVP } from 'pages/before/rsvp';
import { Story } from 'pages/before/story';

export const Before = (): JSX.Element => (
  <Routes>
    <Route element={<Main />} path="/">
      <Route element={<Logistics />} path="logistics" />
      <Route element={<Party />} path="party" />
      <Route element={<Story />} path="story" />
      <Route element={<RSVP />} path="rsvp" />
    </Route>
  </Routes>
);
