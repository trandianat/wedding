import { Route, Routes } from 'react-router-dom';
import { Logistics } from 'components/Before/Logistics';
import { Main } from 'components/Before/Main';
import { Party } from 'components/Before/Party';
import { RSVP } from 'components/Before/RSVP';
import { Story } from 'components/Before/Story';

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
