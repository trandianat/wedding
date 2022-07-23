import { Fragment } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { nav } from 'pages/before/header/styles';

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
      <nav css={nav}>
        <Link to="/">
          <h1>
            <b>B&D</b>
          </h1>
        </Link>
        <div className="pages">
          {pages.map(page => (
            <Link key={page.path} to={page.path}>
              <div {...(path === page.path && { className: 'active' })}>
                {page.name}
              </div>
            </Link>
          ))}
          <Link to="rsvp">
            <button>RSVP</button>
          </Link>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};
