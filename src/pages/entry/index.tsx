import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as styles from 'pages/entry/styles';

export const Entry = (): JSX.Element => (
  <Fragment>
    <div css={styles.logo}>
      <div>
        <span>B&D</span>
      </div>
    </div>
    <nav css={styles.nav}>
      <Link css={styles.before} to="/before/logistics">
        <div>
          <span>before the wedding</span>
        </div>
      </Link>
      <Link css={styles.after} to="/after/thanks">
        <div>
          <span>after the wedding</span>
        </div>
      </Link>
    </nav>
  </Fragment>
);
