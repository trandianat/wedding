import { Route, Routes } from 'react-router-dom';
import { Main } from 'components/Before/Main';
import { Party } from 'components/Before/Party';
import { Story } from 'components/Before/Story';

export const Before = (): JSX.Element => (
  <Routes>
    <Route element={<Main />} path="">
      <Route element={<Party />} path="do" />
      <Route element={<Party />} path="party" />
      <Route element={<Party />} path="registry" />
      <Route element={<Story />} path="story" />
      <Route element={<Party />} path="travel" />
    </Route>
  </Routes>
);
