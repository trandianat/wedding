import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { After } from 'pages/after';
import { Entry } from 'pages/entry';
import { Before } from 'pages/before';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route element={<Entry />} path="/" />
      <Route element={<Before />} path="/before/*" />
      <Route element={<After />} path="/after/*" />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
