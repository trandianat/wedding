import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const App = (): JSX.Element => (
  <Fragment>
    <h1>Wedding Home</h1>
    <Link to="/">Home</Link>|<Link to="/pre">Pre-Wedding</Link>|
    <Link to="/post">Post-Wedding</Link>
    <Outlet />
  </Fragment>
);
