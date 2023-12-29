import { Fragment, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import Book from 'assets/icons/book';
import Camera from 'assets/icons/camera';
import Flower from 'assets/icons/flower';
import Heart from 'assets/icons/heart';
import Map from 'assets/icons/map';
import Nature from 'assets/icons/nature';
import Photo from 'assets/icons/photo';
// import Video from 'assets/icons/video';
import * as styles from 'components/header/styles';
import { useData } from 'utils/hooks';
import { Category, When } from 'utils/types';

export const Header = (): JSX.Element => {
  const data = useData(Category.HEADER);
  const { pathname } = useLocation();
  const { '*': path } = useParams();
  const [scroll, setScroll] = useState(false);
  const when = pathname.includes(When.BEFORE) ? When.BEFORE : When.AFTER;
  const before = when === When.BEFORE;

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
      // { name: 'VIDEO', path: 'video', icon: <Video /> },
      { name: 'VENDORS', path: 'vendors', icon: <Flower /> },
    ],
  };

  useEffect(() => {
    window.onscroll = () => {
      if (document.documentElement.scrollTop > window.innerHeight) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  }, []);

  return (
    data && (
      <Fragment>
        <nav css={styles.nav(before)}>
          <div className="entry">
            <div className="line" />
            <Link to="/">
              <h1 />
            </Link>
            <div className="line" />
          </div>
          <div className={`pages${before ? ' before' : ''}`}>
            {pages[when].map(page => (
              <Link key={page.path} to={page.path}>
                {page.icon}
                <div {...(path === page.path && { className: 'active' })}>
                  {page.name}
                </div>
              </Link>
            ))}
          </div>
        </nav>
        <Outlet />
        {scroll && (
          <a
            css={styles.scroll}
            onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })}
          >
            &uarr;
          </a>
        )}
      </Fragment>
    )
  );
};
