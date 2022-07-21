import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { after, before, logo, nav } from 'pages/entry/styles';

export const Entry = (): JSX.Element => (
  <Fragment>
    <div css={logo}>
      <div>
        <span>B+D</span>
      </div>
    </div>
    <nav css={nav}>
      <Link css={before} to="/before/logistics">
        <div>
          <span>before the wedding</span>
        </div>
      </Link>
      <Link css={after} to="/after">
        <div>
          <span>after the wedding</span>
        </div>
      </Link>
    </nav>
    <Outlet />
  </Fragment>
);
