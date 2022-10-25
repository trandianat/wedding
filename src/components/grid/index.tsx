import * as styles from 'components/grid/styles';
import { Fragment } from 'react';

export const Grid = ({
  items,
}: {
  items: Array<{ category: string; description: JSX.Element | string }>;
}): JSX.Element => (
  <div css={styles.grid}>
    {items.map(item => (
      <Fragment>
        <div>{item.category}</div>
        <div>{item.description}</div>
      </Fragment>
    ))}
  </div>
);
