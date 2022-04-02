import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { app } from 'components/App/styles';

export const App = (): JSX.Element => (
  <Fragment>
    <nav css={app}>
      <Link to="/pre">Pre-Wedding</Link>
      <Link to="/">B+D</Link>
      <Link to="/post">Post-Wedding</Link>
    </nav>
    <Outlet />
  </Fragment>
);
