import { Route, Routes } from 'react-router-dom';
import { Logistics } from 'components/before/logistics';
import { Main } from 'components/before/main';
import { Party } from 'components/before/party';
import { RSVP } from 'components/before/rsvp';
import { Story } from 'components/before/story';

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
