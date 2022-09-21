import * as styles from 'components/divider/styles';
import { DividerVariant, Variant } from 'utils/types';

export const Divider = ({
  variant = Variant.PRIMARY,
}: {
  variant?: DividerVariant;
}): JSX.Element => (
  <div css={variant === Variant.PRIMARY ? styles.primary : styles.secondary} />
);
