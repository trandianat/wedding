import React from 'react';
import * as styles from 'components/card/styles';
import { Divider } from 'components/divider';

export const Card = ({
  children,
  image,
  name,
  position = 'center',
  role,
}: React.PropsWithChildren<{
  image: string;
  name: string;
  position?: string;
  role: string;
}>): JSX.Element => (
  <div className="card" css={styles.card}>
    <div>
      <img css={styles.image(position)} src={image} />
    </div>
    <div css={styles.description}>
      <p css={styles.role}>{role}</p>
      <h3>{name}</h3>
      <Divider />
      <p>{children}</p>
    </div>
  </div>
);
