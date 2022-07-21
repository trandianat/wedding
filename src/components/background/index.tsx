export enum Variant {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

const background: Record<
  string,
  { backgroundColor?: string; color?: string; padding: string }
> = {
  [Variant.PRIMARY]: {
    backgroundColor: 'var(--green)',
    color: 'var(--white)',
    padding: '12px 0',
  },
  [Variant.SECONDARY]: {
    backgroundColor: 'var(--beige)',
    padding: '48px 0',
  },
  [Variant.DEFAULT]: { padding: '48px 0' },
};

const border = {
  borderBottom: '1px solid var(--white)',
  borderTop: '1px solid var(--white)',
  padding: '48px 0',
};

const width = { margin: '0 auto', width: 800 };

export const Background = ({
  children,
  variant = Variant.DEFAULT,
}: React.PropsWithChildren<{ variant?: string }>): JSX.Element => (
  <section
    css={{ ...(variant === Variant.DEFAULT && width), ...background[variant] }}
  >
    <div css={variant === Variant.PRIMARY ? border : width}>
      {variant === Variant.PRIMARY ? (
        <div css={width}>{children}</div>
      ) : (
        children
      )}
    </div>
  </section>
);
