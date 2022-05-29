import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { after, app, before, inner, logo } from 'components/App/styles';

export const App = (): JSX.Element => (
  <Fragment>
    <nav css={app}>
      <Link css={before} to="/before">
        <div>
          <span>before the wedding</span>
        </div>
      </Link>
      <Link css={after} to="/after">
        <div>
          <span>after the wedding</span>
        </div>
      </Link>
      <div css={logo}>
        <div css={inner}><span>B+D</span></div>
      </div>
    </nav>
    <Outlet />
  </Fragment>
);
