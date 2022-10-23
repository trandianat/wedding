import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer } from 'components/footer';
import { Activities } from 'pages/before/activities';
import { Logistics } from 'pages/before/logistics';
import { Header } from 'pages/before/header';
import { Party } from 'pages/before/party';
import { RSVP } from 'pages/before/rsvp';
import { Story } from 'pages/before/story';

export const Before = (): JSX.Element => (
  <Fragment>
    <Routes>
      <Route element={<Header />} path="/">
        <Route element={<Activities />} path="activities" />
        <Route element={<Logistics />} path="logistics" />
        <Route element={<Party />} path="party" />
        <Route element={<Story />} path="story" />
        <Route element={<RSVP />} path="rsvp" />
      </Route>
    </Routes>
    <Footer />
  </Fragment>
);
