import * as styles from 'components/grid/styles';
import { Fragment } from 'react';

export const Grid = ({
  items,
  spacing = 0,
}: {
  items: Array<{ category: string; description: JSX.Element | string }>;
  spacing?: number;
}): JSX.Element => (
  <div css={styles.grid(spacing)}>
    {items.map(item => (
      <Fragment key={item.category}>
        <div>{item.category}</div>
        <div>{item.description}</div>
      </Fragment>
    ))}
  </div>
);
