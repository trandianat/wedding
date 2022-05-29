import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { After } from 'components/After';
import { App } from 'components/App';
import { Before } from 'components/Before';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />} path="/" />
      <Route element={<Before />} path="/before/*" />
      <Route element={<After />} path="/after/*" />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
