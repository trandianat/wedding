import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { nav } from 'components/Before/Main/styles';

export const Main = (): JSX.Element => (
  <Fragment>
    <nav css={nav}>
      <Link to="/">
        <h1>Brendan & Diana</h1>
      </Link>
      <hr />
      <Link to="logistics">LOGISTICS</Link>
      <Link to="party">WEDDING PARTY</Link>
      <Link to="story">OUR STORY</Link>
      <Link to="rsvp">
        <button>RSVP</button>
      </Link>
    </nav>
    <Outlet />
  </Fragment>
);
