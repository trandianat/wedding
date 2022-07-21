import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { After } from 'pages/after';
import { App } from 'pages/app';
import { Before } from 'pages/before';

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
