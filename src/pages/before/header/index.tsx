import { Fragment } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import * as styles from 'pages/before/header/styles';

export const Header = (): JSX.Element => {
  const { '*': path } = useParams();
  const pages = [
    { name: 'LOGISTICS', path: 'logistics' },
    { name: 'THINGS TO DO', path: 'activities' },
    { name: 'WEDDING PARTY', path: 'party' },
    { name: 'OUR STORY', path: 'story' },
  ];
  return (
    <Fragment>
      <nav css={styles.nav}>
        <div className="entry">
          <div className="display" />
          <Link to="/">
            <h1 />
          </Link>
          <div className="display" />
        </div>
        <div className="pages">
          {pages.map(page => (
            <Link key={page.path} to={page.path}>
              <div {...(path === page.path && { className: 'active' })}>
                {page.name}
              </div>
            </Link>
          ))}
          <Link className="rsvp" to="rsvp">
            <button>RSVP</button>
          </Link>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};
