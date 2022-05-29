import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { nav } from 'components/Before/Main/styles';

export const Main = (): JSX.Element => (
  <Fragment>
    <h2>Pre-Wedding</h2>
    <nav css={nav}>
      <Link to="">Pre-Wedding Home</Link>
      <Link to="story">Our Story</Link>
      <Link to="party">Wedding Party</Link>
      <Link to="travel">Hotels & Travel</Link>
      <Link to="do">Things to Do</Link>
      <Link to="registry">Registry</Link>
    </nav>
    <Outlet />
  </Fragment>
);
