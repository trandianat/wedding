import * as styles from 'components/card/styles';
import { Divider } from 'components/divider';
import React from 'react';
import { CardVariant, Variant } from 'utils/types';

export const Card = ({
  children,
  image,
  name,
  position = 'center',
  role,
  variant = Variant.DEFAULT,
}: React.PropsWithChildren<{
  image: string;
  name: string;
  position?: string;
  role: string;
  variant?: CardVariant;
}>): JSX.Element => (
  <div css={variant === Variant.SIDE ? styles.side : styles.stack}>
    <div css={styles.image(position)}>
      <img src={image} />
    </div>
    <div css={styles.description}>
      <p css={styles.role}>{role}</p>
      <h3>{name}</h3>
      <Divider />
      <p>{children}</p>
    </div>
  </div>
);
