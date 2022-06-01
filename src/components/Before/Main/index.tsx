import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { nav } from 'components/Before/Main/styles';

export const Main = (): JSX.Element => (
  <Fragment>
    <nav css={nav}>
      <Link to="/">
        <div>
          <h1>Brendan & Diana</h1>
        </div>
      </Link>
      <hr />
      <Link to="logistics">
        <div>LOGISTICS</div>
      </Link>
      <Link to="party">
        <div>WEDDING PARTY</div>
      </Link>
      <Link to="story">
        <div>OUR STORY</div>
      </Link>
      <Link to="rsvp">
        <button>RSVP</button>
      </Link>
    </nav>
    <Outlet />
  </Fragment>
);
