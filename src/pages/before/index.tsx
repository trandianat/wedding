import { Route, Routes } from 'react-router-dom';
import { Logistics } from 'pages/before/logistics';
import { Header } from 'pages/before/header';
import { Party } from 'pages/before/party';
import { RSVP } from 'pages/before/rsvp';
import { Story } from 'pages/before/story';

export const Before = (): JSX.Element => (
  <Routes>
    <Route element={<Header />} path="/">
      <Route element={<Logistics />} path="logistics" />
      <Route element={<Party />} path="party" />
      <Route element={<Story />} path="story" />
      <Route element={<RSVP />} path="rsvp" />
    </Route>
  </Routes>
);
