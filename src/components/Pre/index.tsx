import { Route, Routes } from 'react-router-dom';
import { Main } from 'components/Pre/Main';
import { Party } from 'components/Pre/Party';
import { Story } from 'components/Pre/Story';

export const Pre = (): JSX.Element => (
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
