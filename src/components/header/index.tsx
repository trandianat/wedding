import { Fragment } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import * as styles from 'components/header/styles';
import { When } from 'utils/types';

export const Header = (): JSX.Element => {
  const { pathname } = useLocation();
  const { '*': path } = useParams();
  const when = pathname.includes(When.BEFORE) ? When.BEFORE : When.AFTER;
  const before = when === When.BEFORE;
  const pages = {
    [When.BEFORE]: [
      { name: 'LOGISTICS', path: 'logistics' },
      { name: 'THINGS TO DO', path: 'activities' },
      { name: 'WEDDING PARTY', path: 'party' },
      { name: 'OUR STORY', path: 'story' },
    ],
    [When.AFTER]: [
      { name: 'THANK YOU', path: 'thanks' },
      { name: 'PHOTOS', path: 'photos' },
    ],
  };
  return (
    <Fragment>
      <nav css={styles.nav(before)}>
        <div className="entry">
          <div className="display" />
          <Link to="/">
            <h1 />
          </Link>
          <div className="display" />
        </div>
        <div className="pages">
          {pages[when].map(page => (
            <Link key={page.path} to={page.path}>
              <div {...(path === page.path && { className: 'active' })}>
                {page.name}
              </div>
            </Link>
          ))}
          {before && (
            <Link className="rsvp" to="rsvp">
              <button>RSVP</button>
            </Link>
          )}
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};
