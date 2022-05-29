import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { nav } from 'components/Before/Main/styles';

export const Main = (): JSX.Element => (
  <Fragment>
    <nav css={nav}>
      <Link to="/">
        <h1>Brendan & Diana</h1>
      </Link>
      <Link to="story">Logistics</Link>
      <Link to="party">Wedding Party</Link>
      <Link to="travel">Our Story</Link>
      <Link to="travel">RSVP</Link>
    </nav>
    <Outlet />
  </Fragment>
);
