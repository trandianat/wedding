import * as styles from 'components/card/styles';

export const Card = ({
  role,
  name,
  description,
}: {
  role: string;
  name: string;
  description: string;
}): JSX.Element => (
  <div css={styles.outline}>
    <div css={styles.image}>image</div>
    <div css={styles.description}>
      <p css={styles.role}>{role}</p>
      <h3>{name}</h3>
      <div className="divider" />
      <p>{description}</p>
    </div>
  </div>
);
