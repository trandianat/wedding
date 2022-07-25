import * as styles from 'components/background/styles';

export enum Variant {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export const background: Record<
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
}: React.PropsWithChildren<{ variant?: string }>): JSX.Element => (
  <section
    css={{
      ...(variant === Variant.DEFAULT && styles.width),
      ...background[variant],
    }}
  >
    <div css={variant === Variant.PRIMARY ? styles.border : styles.width}>
      {variant === Variant.PRIMARY ? (
        <div css={styles.width}>{children}</div>
      ) : (
        children
      )}
    </div>
  </section>
);
