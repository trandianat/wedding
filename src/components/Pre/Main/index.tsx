import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Main = (): JSX.Element => (
  <Fragment>
    <h2>Pre-Wedding</h2>
    <Link to="">Pre-Wedding Home</Link>|<Link to="party">Wedding Party</Link>|
    <Link to="story">Our Story</Link>
    <Outlet />
  </Fragment>
);
