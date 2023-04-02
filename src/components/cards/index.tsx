import * as styles from 'components/cards/styles';
import { CardVariant, Variant } from 'utils/types';

export const Cards = ({
  children,
  variant = Variant.DEFAULT,
}: {
  children: React.ReactNode;
  variant?: CardVariant;
}): JSX.Element => (
  <div
    className={variant === Variant.SIDE ? 'side' : 'stack'}
    css={styles.container}
  >
    {children}
  </div>
);
