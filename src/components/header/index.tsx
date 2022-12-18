import { Fragment } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import Book from 'assets/icons/book';
import Camera from 'assets/icons/camera';
import Envelope from 'assets/icons/envelope';
import Flower from 'assets/icons/flower';
import Heart from 'assets/icons/heart';
import Map from 'assets/icons/map';
import Nature from 'assets/icons/nature';
import Photo from 'assets/icons/photo';
import * as styles from 'components/header/styles';
import { Link as LinkOut } from 'components/link';
import { When } from 'utils/types';

export const Header = (): JSX.Element => {
  const { pathname } = useLocation();
  const { '*': path } = useParams();
  const when = pathname.includes(When.BEFORE) ? When.BEFORE : When.AFTER;
  const before = when === When.BEFORE;
  const rsvp = false;
  const pages = {
    [When.BEFORE]: [
      { name: 'LOGISTICS', path: 'logistics', icon: <Map /> },
      { name: 'THINGS TO DO', path: 'activities', icon: <Nature /> },
      { name: 'WEDDING PARTY', path: 'party', icon: <Photo /> },
      { name: 'OUR STORY', path: 'story', icon: <Book /> },
    ],
    [When.AFTER]: [
      { name: 'THANK YOU', path: 'thanks', icon: <Heart /> },
      { name: 'PHOTOS', path: 'photos', icon: <Camera /> },
      { name: 'VENDORS', path: 'vendors', icon: <Flower /> },
    ],
  };
  return (
    <Fragment>
      <nav css={styles.nav(before, rsvp)}>
        <div className="entry">
          <div className="line" />
          <Link to="/">
            <h1 />
          </Link>
          <div className="line" />
        </div>
        {before && rsvp && <button className="display">RSVP</button>}
        <div className="pages">
          {pages[when].map(page => (
            <Link key={page.path} to={page.path}>
              {page.icon}
              <div {...(path === page.path && { className: 'active' })}>
                {page.name}
              </div>
            </Link>
          ))}
          {before && rsvp && (
            <LinkOut url="https://www.zola.com/wedding/tranmurphywedding/rsvp">
              <Envelope />
              <div className="rsvp">RSVP</div>
            </LinkOut>
          )}
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};
