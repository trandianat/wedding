import * as styles from 'components/background/styles';
import { BackgroundVariant, Variant } from 'utils/types';

const background: Record<
  string,
  { backgroundColor?: string; color?: string; padding: string }
> = {
  [Variant.PRIMARY]: styles.primary,
  [Variant.SECONDARY]: styles.secondary,
  [Variant.DEFAULT]: styles.tertiary,
};

export const Background = ({
  children,
  variant = Variant.DEFAULT,
}: React.PropsWithChildren<{ variant?: BackgroundVariant }>): JSX.Element => (
  <section css={background[variant]}>
    <div css={variant === Variant.PRIMARY ? styles.border : styles.width}>
      {variant === Variant.PRIMARY ? (
        <div css={styles.width}>{children}</div>
      ) : (
        children
      )}
    </div>
  </section>
);
