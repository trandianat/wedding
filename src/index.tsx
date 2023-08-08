import { Amplify } from 'aws-amplify';
import awsconfig from 'aws-exports';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { After } from 'pages/after';
import { Before } from 'pages/before';
import { Entry } from 'pages/entry';
import 'styles.css';

Amplify.configure(awsconfig);

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route element={<After />} path="/after/*" />
      <Route element={<Before />} path="/before/*" />
      <Route element={<Entry />} path="*" />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
