import * as styles from 'components/card/styles';

export enum Variant {
  DEFAULT = 'default',
  SIDE = 'side',
}

export const Card = ({
  role,
  name,
  description,
  variant = Variant.DEFAULT,
}: {
  role: string;
  name: string;
  description: string;
  variant?: string;
}): JSX.Element => (
  <div css={variant === Variant.SIDE ? styles.side : styles.stack}>
    <div css={styles.image}>image</div>
    <div css={styles.description}>
      <p css={styles.role}>{role}</p>
      <h3>{name}</h3>
      <div className="divider" />
      <p>{description}</p>
    </div>
  </div>
);
