import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { app } from 'components/App/styles';

export const App = (): JSX.Element => (
  <Fragment>
    <h1>Brendan & Diana</h1>
    <nav css={app}>
      <Link to="/">Home</Link>
      <Link to="/pre">Pre-Wedding</Link>
      <Link to="/post">Post-Wedding</Link>
    </nav>
    <Outlet />
  </Fragment>
);
