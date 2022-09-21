import * as styles from 'components/card/styles';
import { Divider } from 'components/divider';
import { CardVariant, Variant } from 'utils/types';

export const Card = ({
  role,
  name,
  description,
  variant = Variant.DEFAULT,
}: {
  role: string;
  name: string;
  description: string;
  variant?: CardVariant;
}): JSX.Element => (
  <div css={variant === Variant.SIDE ? styles.side : styles.stack}>
    <div css={styles.image}>image</div>
    <div css={styles.description}>
      <p css={styles.role}>{role}</p>
      <h3>{name}</h3>
      <Divider />
      <p>{description}</p>
    </div>
  </div>
);
